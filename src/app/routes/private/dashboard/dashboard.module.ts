import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavMenuService } from '@app/app/services/sidenav-menu/sidenav-menu.service';
import { DashboardComponent } from './dashboard.component';
import { ContractsStatsComponent } from './components/contracts-stats/contracts-stats.component';
import { CachFlowStatsComponent } from './components/cach-flow-stats/cach-flow-stats.component';
import { TasksOverviewComponent } from './components/tasks-overview/tasks-overview.component';
import { TopContractsComponent } from './components/top-contracts/top-contracts.component';
import { UsersActivityStatsComponent } from './components/users-activity-stats/users-activity-stats.component';
import { CardModule } from 'primeng/card';
import { SharedModule } from '@app/app/shared/shared.module';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [
    DashboardComponent,
    ContractsStatsComponent,
    CachFlowStatsComponent,
    TasksOverviewComponent,
    TopContractsComponent,
    UsersActivityStatsComponent,
  ],
  imports: [CommonModule, CardModule, SharedModule, DividerModule],
})
export class DashboardModule {
  constructor(private sidenav: SidenavMenuService) {
    this.sidenav.addItem({
      label: 'Dashboard',
      icon: 'dashboard',
      hideInSearch: true,
      isVisibleTo: ['admin', 'user'],
      route: 'private/',
      moduleName: 'user',
    });
  }
}
