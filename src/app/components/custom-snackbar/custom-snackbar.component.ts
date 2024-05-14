import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-snackbar',
  template: `
    <div
      class="flex align-items-start justify-content-between text-white relative max-w-xs lg:max-w-md max-h-[200px] overflow-y-scroll no-scrollbar "
    >
      <div class="grow-1">
        <p class="mat-body-1">
          <span>[{{ data.errorInfo.status || '' }}]</span>
          {{ data.errorInfo.name || 'Error' }}
        </p>
        <p class="mat-body-1">
          {{ data.errorInfo.message || 'Unknown error' }}
        </p>
        <!-- <mat-expansion-panel *ngIf="data.errorInfo.stack">
          <mat-expansion-panel-header>
            <mat-panel-title> Stack </mat-panel-title>
          </mat-expansion-panel-header>
          <pre>
					{{ data.errorInfo.stack | json }}
								</pre
          >
        </mat-expansion-panel> -->
      </div>
      <button
        class="align-self-start grow-0"
        mat-icon-button
        (click)="snackBarRef.dismiss()"
      >
        <mat-icon>close</mat-icon>
      </button>
    </div>
  `,
  styles: [``],
})
export class CustomSnackbarComponent implements OnInit {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA)
    public data: {
      errorInfo: {
        status?: any;
        message?: string;
        name?: string;
        stack?: any;
      };
    },
    public snackBarRef: MatSnackBar
  ) {}

  ngOnInit(): void {}
}
