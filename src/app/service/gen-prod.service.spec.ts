import { TestBed, inject } from '@angular/core/testing';

import { GenProdService } from './gen-prod.service';

describe('GenProdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenProdService]
    });
  });

  it('should be created', inject([GenProdService], (service: GenProdService) => {
    expect(service).toBeTruthy();
  }));
});
