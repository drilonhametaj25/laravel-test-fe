import { Routes } from '@angular/router';
import { PublicResolver } from './public-resolver';
import { PublicComponent } from './public.component';

export const PublicRoutes: Routes = [
  {
    path: 'public',
    component: PublicComponent,
    resolve: {
      auth: PublicResolver,
    },
    runGuardsAndResolvers: 'always',
  },
];
