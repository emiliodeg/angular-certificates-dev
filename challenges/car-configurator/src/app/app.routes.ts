import { Routes } from '@angular/router';
import { activateStepGuard } from './guards/activate-step.guard';

export const routes: Routes = [
  {
    path: 'step1',
    loadComponent: () =>
      import('./step1/step1.component').then((m) => m.Step1Component),
  },
  {
    path: 'step2',
    canActivate: [activateStepGuard],
    data: { step: 2 },
    loadComponent: () =>
      import('./step2/step2.component').then((m) => m.Step2Component),
  },
  {
    path: 'step3',
    canActivate: [activateStepGuard],
    data: { step: 3 },
    loadComponent: () =>
      import('./step3/step3.component').then((m) => m.Step3Component),
  },
  {
    path: '**',
    redirectTo: 'step1',
  },
];
