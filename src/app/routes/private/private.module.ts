import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutWrapperModule } from '@app/app/components/layout-wrapper/layout-wrapper.module';
import { SidenavMenuModule } from '@app/app/services/sidenav-menu/sidenav-menu.module';
import { PrivateComponent } from './private.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { BreweriesModule } from './breweries/breweries.module';

@NgModule({
  declarations: [PrivateComponent],
  imports: [
    CommonModule,
    RouterModule,
    LayoutWrapperModule,
    SidenavMenuModule,
    DashboardModule,
    BreweriesModule,
  ],
})
export class PrivateModule {}
