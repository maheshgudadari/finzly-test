import { TestBed } from '@angular/core/testing';

import { AccoutResolverService } from './accout-resolver.service';

describe('AccoutResolverService', () => {
  let service: AccoutResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccoutResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
