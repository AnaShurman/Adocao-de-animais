import { TestBed } from '@angular/core/testing';

import { CaesService } from '../services/caes.service';

describe('CaesService', () => {
  let service: CaesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
