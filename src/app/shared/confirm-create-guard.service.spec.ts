import { TestBed } from '@angular/core/testing';

import { ConfirmCreateGuardService } from './confirm-create-guard.service';

describe('ConfirmCreateGuardService', () => {
  let service: ConfirmCreateGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmCreateGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
