import { Routes } from "@angular/router";
import { BreweriesComponent } from "./breweries.component";
import { BrewieriesResolver } from "./breweries-resolver";

export const BreweriesRoutes: Routes = [
  {
    path: 'breweries',
    component: BreweriesComponent,
    resolve: {
      items: BrewieriesResolver
      ,
    },
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'breweries',
    component: BreweriesComponent,
  }
];
