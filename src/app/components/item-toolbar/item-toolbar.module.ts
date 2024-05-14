import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemToolbarComponent } from './item-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PipesModule } from '@app/app/pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ConfirmModule } from '@app/app/directives/confirm/confirm.module';



@NgModule({
  declarations: [ItemToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    PipesModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    ConfirmModule
  ],
  exports: [ItemToolbarComponent],
})
export class ItemToolbarModule {}
