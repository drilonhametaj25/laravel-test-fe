import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ProgressSpinnerComponent } from '@app/app/components/progress-spinner/progress-spinner.component';
import { SnackService } from '@app/app/services/snack.service';
import { UiLoadingService } from '@app/app/services/ui-loading.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BrewieriesService } from './breweries.service';

@Injectable({ providedIn: 'root' })
export class BrewieriesResolver implements Resolve<any[]> {
  constructor(
    private breweriesService: BrewieriesService,
    protected snackService: SnackService,
    private uiLoading: UiLoadingService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any[]> | Promise<any[]> | any {
    // !route.queryParamMap.get('disableLoading') &&
    //   this.uiLoading.openSpinner(
    //     { hasBackdrop: true },
    //     ProgressSpinnerComponent
    //   );

  }
}

@Injectable({ providedIn: 'root' })
export class UserSingleResolver implements Resolve<any> {
  constructor(
    private breweriesService: BrewieriesService,
    protected snackService: SnackService,
    private uiLoading: UiLoadingService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const id = route.params['id'];
    if (!id) {
      console.error(`Item id not found`);
      this.uiLoading.stopSpinner();
      return of({ booking: null });
    }

  }
}
