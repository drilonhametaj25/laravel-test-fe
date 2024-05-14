import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [PublicComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule],
})
export class PublicModule {}
