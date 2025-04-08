import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ShowData',
    loadComponent: () =>
      import('./Components/Pages/show-data/show-data.component').then(
        (m) => m.ShowDataComponent
      ),
  },
  {
    path: 'AddData',
    loadComponent: () =>
      import('./Components/Pages/add-data/add-data.component').then(
        (m) => m.AddDataComponent
      ),
  },
  { path: '**', redirectTo: 'ShowData', pathMatch: 'full' },
];
