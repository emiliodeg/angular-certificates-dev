import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { activateStepGuard } from './activate-step.guard';

describe('activateStepGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => activateStepGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
