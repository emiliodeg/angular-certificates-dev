import { CanActivateFn, Router } from '@angular/router';
import { ConfiguratorService } from '../configurator.service';
import { inject } from '@angular/core';

export const activateStepGuard: CanActivateFn = (route) => {
  const configuratorService = inject(ConfiguratorService);
  const router = inject(Router);

  const { step } = route.data;

  return step <= configuratorService.availableStep() || router.parseUrl('/step1');
};
