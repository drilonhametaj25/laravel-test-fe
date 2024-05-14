import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { ChartModule } from 'primeng/chart';
import { ChartLineComponent } from './chart-line/chart-line.component';
import { GenericListItemComponent } from './generic-list-item/generic-list-item.component';
import { CalendarCustomComponent } from './calendar-custom/calendar-custom.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [
    TopBarComponent,
    ChartPieComponent,
    ChartLineComponent,
    GenericListItemComponent,
    CalendarCustomComponent,
  ],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    DividerModule,
    ChartModule,
    FullCalendarModule,
    DialogModule,
    DropdownModule,
  ],
  exports: [
    TopBarComponent,
    ChartPieComponent,
    ChartLineComponent,
    GenericListItemComponent,
    CalendarCustomComponent,
  ],
})
export class SharedModule {}
