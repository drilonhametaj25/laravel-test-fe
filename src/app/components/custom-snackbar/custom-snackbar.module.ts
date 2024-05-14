import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSnackbarComponent } from './custom-snackbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [CustomSnackbarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule
  ],
  exports: [CustomSnackbarComponent]
})
export class CustomSnackbarModule { }
