import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutWrapperComponent } from './layout-wrapper.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from '@app/app/app-routing.module';
import { SidenavMenuModule } from '@app/app/services/sidenav-menu/sidenav-menu.module';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [LayoutWrapperComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    SidenavMenuModule,
    MatListModule,
    MatTooltipModule
  ],
  exports: [LayoutWrapperComponent],
})
export class LayoutWrapperModule {}
