import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { AuthGuard } from './interceptors/auth/auth-guard.class';
import { LoginComponent } from './routes/login/login.component';
import { PrivateComponent } from './routes/private/private.component';
import { PublicRoutes } from './routes/public/public.routes';
import { DashboardRoutes } from './routes/private/dashboard/dashboard.routes';
import { AppLayoutComponent } from './layout/app.layout.component';
import { MaintenanceComponent } from './routes/maintenance/maintenance.component';
import { BreweriesRoutes } from './routes/private/breweries/breweries.routes';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      //insert new route here, above is the sakai theme from primeng
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'maintenance', component: MaintenanceComponent },
      { path: 'error', component: ErrorComponent },
      ...PublicRoutes,
      {
        path: 'private',
        component: PrivateComponent,
        canActivate: [AuthGuard],
        //canActivateChild: [AuthGuard],
        children: [
          ...DashboardRoutes,
          ...BreweriesRoutes,
        ],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
  providers: [HttpClient, MatSnackBar, AuthGuard],
})
export class AppRoutingModule {}
