import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackService } from '@app/app/services/snack.service';
import { Router } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@Injectable()
export class ClientErrorHandler implements ErrorHandler {
  constructor(private injector: Injector, private zone: NgZone) {}

  handleError(error: Error | HttpErrorResponse) {
    const notifier = this.injector.get(SnackService);
    const router = this.injector.get(Router);
    const location = this.injector.get(LocationStrategy);
    const url = location instanceof PathLocationStrategy ? location.path() : '';
    let message: any;

    if (!navigator.onLine) {
      notifier.error('No internet connection');
      this.zone.run(() =>
        router.navigate(['/error'], {
          queryParams: { message: 'No internet connection' },
        })
      );
    }

    console.error(error);
  }
}
