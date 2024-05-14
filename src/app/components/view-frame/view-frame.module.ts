import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFrameComponent } from './view-frame.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from '@app/app/app-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ViewFrameComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    ButtonModule,
  ],
  exports: [ViewFrameComponent],
})
export class ViewFrameModule {}
