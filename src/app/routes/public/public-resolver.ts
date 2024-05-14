import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ProgressSpinnerComponent } from '@app/app/components/progress-spinner/progress-spinner.component';
import { AuthService } from '@app/app/services/auth-service.service';
import { SnackService } from '@app/app/services/snack.service';
import { UiLoadingService } from '@app/app/services/ui-loading.service';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PublicResolver implements Resolve<any[]> {
  constructor(
    private authService: AuthService,
    protected snackService: SnackService,
    private router: Router,
    private uiLoading: UiLoadingService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any[]> | Promise<any[]> | any {
    this.uiLoading.openSpinner({ hasBackdrop: true }, ProgressSpinnerComponent);
    return this.authService.verify(route.queryParams).pipe(
      map((user: any) => {
        if (user && user._id) {
          this.authService.saveUserInfo(user);
          this.authService.saveTokenUid(route.queryParams);
        }
        return {
          user,
        };
      }),
      tap(() => this.uiLoading.stopSpinner()),
      catchError((error) => {
        const message = `${error.name || ''} ${error.message}`;
        console.error(message);
        this.snackService.message(message, 'error');
        this.uiLoading.stopSpinner();
        this.router.navigate(['/login']);
        return of({ user: null, error: message });
      })
    );
  }
}
