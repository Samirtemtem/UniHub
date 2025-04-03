import { TestBed } from '@angular/core/testing';

import { FoyerListResolverService } from './foyer-list-resolver.service';

describe('FoyerListResolverService', () => {
  let service: FoyerListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoyerListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
