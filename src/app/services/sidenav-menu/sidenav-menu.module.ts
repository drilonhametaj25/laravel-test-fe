import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedMenuComponent } from './nested-menu/nested-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { IsVisibleToModule } from '@app/app/directives/is-visible-to/is-visible-to.module';
import { AppRoutingModule } from '@app/app/app-routing.module';

@NgModule({
  declarations: [NestedMenuComponent],
  imports: [CommonModule, IsVisibleToModule, MatIconModule, MatListModule, AppRoutingModule],
  exports: [NestedMenuComponent],
})
export class SidenavMenuModule {}
