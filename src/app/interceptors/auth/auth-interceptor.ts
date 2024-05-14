import { Injectable, Inject } from '@angular/core';
import { AUTH_INTERCEPTOR_OPTIONS } from './auth-interceptor-options';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SnackService } from '@app/app/services/snack.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { UiLoadingService } from '@app/app/services/ui-loading.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  private whitelist: Array<RegExp> = [];
  private blacklist: Array<RegExp> = [];

  constructor(
    @Inject(AUTH_INTERCEPTOR_OPTIONS) config: any,
    private snackService: SnackService,
    private router: Router,
    private uiLoading: UiLoadingService
  ) {
    this.whitelist = config.whitelist || [new RegExp('*')];
    this.blacklist = config.blacklist || [new RegExp('*/public/*')];
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let cloned: HttpRequest<any>;
    if (this.isWhitelisted(request) && !this.isBlacklisted(request)) {
      cloned = request.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }),
      });
    } else {
      cloned = request.clone();
    }

    return next.handle(cloned).pipe(
      tap(
        (evt) => {
          if (evt instanceof HttpResponse) {
            const token = evt.headers.get('Authorization');
            const uid = evt.headers.get('X-UID');
            if (
              !!token &&
              token.split(' ')[0] === 'Bearer' &&
              token.split(' ')[1]
            ) {
              localStorage.setItem('token', token.split(' ')[1]);
              document.cookie = 'token=' + token.split(' ')[1] + '; path=/';

              localStorage.setItem('uid', uid || 'Not-available');
            }
          }
        },
        (error) => {
          const errorInfo = {
            status: error.status,
            name: error.name,
            message: error.error?.message || error.message || 'Unknown error',
          };
          this.uiLoading.stopSpinner();
          if (error && error.status === 401) {
            this.router.navigate(['/login']);
          } else if(error && error.status == 403){
            this.snackService.error('Non ha accesso a questa sezione');
          } else {
            // this.router.navigate(['/error'], {
            //   queryParams: {
            //     message: errorInfo.message,
            //     status: errorInfo.status,
            //     name: errorInfo.name,
            //   },
            // });
            this.snackService.error('', 'close', 5000, errorInfo);
          }
        }
      )
      // catchError((error) => {
      //   console.log('in auth interceoptor', error);
      //   const message = `${error.status || ''} ${error.name || ''} ${
      //     error.error?.message || 'Unknown error123'
      //   } `;
      //   console.error(message);
      //   if (error && error.status === 401) {
      //     this.snackService.error('Sessione scaduta', 'error');
      //     this.router.navigate(['/login']);
      //   } else {
      //     this.snackService.error(message);
      //   }
      //   // !this.route.queryParamMap.get('disableLoading') &&
      //   this.uiLoading.stopSpinner();
      //   window.alert(message);
      //   return throwError(() => error);
      // })
    );
  }

  isWhitelisted(request: HttpRequest<any>): boolean {
    const url = request.url;
    return (
      this.whitelist.findIndex((route) =>
        route instanceof RegExp ? route.test(url) : false
      ) > -1
    );
  }

  isBlacklisted(request: HttpRequest<any>): boolean {
    const url = request.url;
    return (
      this.blacklist.findIndex((route) =>
        route instanceof RegExp ? route.test(url) : false
      ) > -1
    );
  }
}
