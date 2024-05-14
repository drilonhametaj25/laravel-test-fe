import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavMenuService } from '@app/app/services/sidenav-menu/sidenav-menu.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ViewFrameModule } from '@app/app/components/view-frame/view-frame.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from '@app/app/app-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { SharedModule } from '@app/app/shared/shared.module';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PaginatorModule } from 'primeng/paginator';
import { BreweriesComponent } from './breweries.component';
import { ListBreweriesComponent } from './list-breweries/list-breweries.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    BreweriesComponent,
    ListBreweriesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxDatatableModule,
    ViewFrameModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    AutoCompleteModule,
    BrowserModule,
    BrowserAnimationsModule,
    MessagesModule,
    SharedModule,
    DataViewModule,
    DropdownModule,
    CardModule,
    ConfirmDialogModule,
    PaginatorModule,
    MatPaginatorModule,
    MatTableModule
  ],
})
export class BreweriesModule {
  constructor(private sidenav: SidenavMenuService) {
    this.sidenav.addItem({
      label: 'Breweries',
      icon: 'face',
      hideInSearch: true,
      route: 'private/breweries',
    });
  }
}
