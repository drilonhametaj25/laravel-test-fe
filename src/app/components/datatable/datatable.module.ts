import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ViewFrameModule } from '../view-frame/view-frame.module';
import { DatatableComponent } from './datatable.component';




@NgModule({
  declarations: [
    DatatableComponent
  ],
  imports: [
    CommonModule,
    ViewFrameModule,
    NgxDatatableModule,
    RouterModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    DragDropModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    DatatableComponent
  ]
})
export class DatatableModule { }
