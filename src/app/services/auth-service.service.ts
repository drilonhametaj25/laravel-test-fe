import { tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { ApiService } from './api.service';
import { UserInterface } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedUser = new BehaviorSubject<UserInterface | undefined>(
    undefined
  );

  constructor(private apiService: ApiService) {}

  login(
    email: string,
    password: string
  ): Observable<HttpResponse<UserInterface>> {
    return this.apiService
      .post(
        '/auth/login',
        {
          email,
          password,
        },
        {
          observe: 'response',
        }
      )
      .pipe(tap((res) => {
        this.saveUserInfo(res.body)
        this.saveTokenUid(res.body);
      }
      ));
  }

  saveUserInfo(body: any): void {
    localStorage.setItem('userInfo', JSON.stringify(body?.data?.user || body));
    this.loggedUser.next(body);
  }
  saveTokenUid(info: any): void {
    console.log('save token uid', { token: info.authorisation.token });
    localStorage.setItem('token', info.authorisation.token);
    // save data to cookie
    document.cookie = 'token=' + info.authorisation.token + '; path=/';

  }

  removeUserInfo(): void {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
    this.loggedUser.next(undefined);
  }

  getUserInfo(): UserInterface {
    return JSON.parse(localStorage.getItem('userInfo') || '');
  }

  getLoggedUser() {
    return this.loggedUser.asObservable();
  }

  logout() {
    // force header in logout
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    this.removeUserInfo();

  }

  public isLoggedIn() {
    return this.apiService
      .post('/auth/verify', {
        token: localStorage.getItem('token')
      })
      .pipe(
        tap((res) => {
          //console.log(res)
          //this.saveUserInfo(res)
        }),
        map((user) => {
          return true
        })
      );
  }
  public verify(info: any) {
    return this.apiService.post('/auth/verify', {
      token: info.token,
      uid: info.uid,
    });
  }
  // public isLoggedIn(info: any) {
  //   return this.apiService
  //     .post('/auth/verify', {
  //       token: info.token,
  //       uid: info.uid,
  //     })
  //     .pipe(
  //       tap((res) => this.saveUserInfo(res)),
  //       map((user) => {
  //         return !!user['_id'];
  //       })
  //     );
  // }

  generateToken(email: string) {
    return this.apiService.post('/auth/reset-password-request', {
      email,
    });
  }

  validatePasswordReset(
    email: string,
    token: string,
    password: string,
    passwordConfirmation: string
  ) {
    return this.apiService.post('/auth/reset-password', {
      email,
      token,
      password,
      passwordConfirmation,
    });
  }
}
