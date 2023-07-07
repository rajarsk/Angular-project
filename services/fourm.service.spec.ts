import { TestBed } from '@angular/core/testing';

import { FourmService } from './fourm.service';

describe('FourmService', () => {
  let service: FourmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FourmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
