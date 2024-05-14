import { Injectable } from '@angular/core';
import {
  Router
} from '@angular/router';
import { AuthService } from '@app/app/services/auth-service.service';

@Injectable()
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    this.authService.isLoggedIn().subscribe((x) => {
      if (x) return true;
      this.router.navigate(['/login']);
      return false;
    });
  }
}
