import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '@app/app/app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ViewFrameModule } from '../view-frame/view-frame.module';



@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, AppRoutingModule, MatToolbarModule, ViewFrameModule],
  exports: [ErrorComponent],
})
export class ErrorModule {}
