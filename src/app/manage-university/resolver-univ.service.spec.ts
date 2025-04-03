import { TestBed } from '@angular/core/testing';

import { ResolverUnivService } from './resolver-univ.service';

describe('ResolverUnivService', () => {
  let service: ResolverUnivService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolverUnivService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
