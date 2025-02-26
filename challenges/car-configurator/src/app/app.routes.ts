import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'step1',
    loadComponent: () =>
      import('./step1/step1.component').then((m) => m.Step1Component),
  },
  {
    path: 'step2',
    loadComponent: () =>
      import('./step2/step2.component').then((m) => m.Step2Component),
  },
  {
    path: '**',
    redirectTo: 'step1',
  },
];
