import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from '../components/custom-snackbar/custom-snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  closeLabel = 'chiudi';

  constructor(private snackBar: MatSnackBar) {}
  scrollTo(el: Element): void {
    if (el) {
      el.scrollIntoView();
    }
  }
  scrollToError(): void {
    const firstElementWithError = document.querySelector('.ng-invalid');
    console.log('scrolling to invalid input', { firstElementWithError });
    firstElementWithError && this.scrollTo(firstElementWithError);
  }

  message(message: string, action?: string, duration?: number) {
    console.warn(
      'SnackService.message is depricated, please use SnackService.info SnackService.warn SnackService.error instead'
    );
    return this.info(message, action, duration);
  }

  customSnack(data?: any) {
    this.scrollToError();
    console.log({ data });
    return this.snackBar.openFromComponent(CustomSnackbarComponent, {
      data,
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['snackbar-custom', 'snackbar-error'],
    });
  }

  info(message: string, action?: string, duration?: number) {
    return this.snackBar.open(message, action ? action : undefined, {
      duration: duration ? duration : 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['snackbar-custom', 'snackbar-info'],
    });
  }

  warning = this.warn;
  warn(message: string, action?: string, duration?: number) {
    return this.snackBar.open(message, action ? action : this.closeLabel, {
      duration: duration ? duration : 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['snackbar-custom', 'snackbar-warn'],
    });
  }

  err = this.error;
  error(
    message: string,
    action?: string,
    duration?: number,
    errorInfo?: { status?: any; message?: string; name?: string; stack?: any }
  ) {
    
    if (!errorInfo) {
      this.snackBar.open(message, action ? action : this.closeLabel, {
        duration: duration ? duration : 10000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['snackbar-custom', 'snackbar-error'],
      });
    } else {
      this.snackBar.openFromComponent(CustomSnackbarComponent, {
        data: { errorInfo },
        duration: duration ? duration : 5000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['snackbar-custom', 'snackbar-error'],
      });
    }
  }
  // error(message: string, action?: string, duration?: number) {
  //   return this.snackBar.open(message, action ? action : this.closeLabel, {
  //     duration: duration ? duration : 10000,
  //     horizontalPosition: this.horizontalPosition,
  //     verticalPosition: this.verticalPosition,
  //     panelClass: ['snackbar-custom', 'snackbar-error'],
  //   });
  // }
}
