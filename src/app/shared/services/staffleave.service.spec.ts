import { TestBed } from '@angular/core/testing';

import { StaffleaveService } from './staffleave.service';

describe('StaffleaveService', () => {
  let service: StaffleaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffleaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
