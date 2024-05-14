import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
      {
        /* path: 'charts',
        data: { breadcrumb: 'Charts' },
        loadChildren: () =>
          import('./charts/chartsdemo.module').then((m) => m.ChartsDemoModule),*/
      },
      { path: '**', redirectTo: '/notfound' },
    ]),
  ],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
