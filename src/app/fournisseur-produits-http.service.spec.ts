import { TestBed } from '@angular/core/testing';

import { FournisseurProduitsHttpService } from './fournisseur-produits-http.service';

describe('FournisseurProduitsHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FournisseurProduitsHttpService = TestBed.get(FournisseurProduitsHttpService);
    expect(service).toBeTruthy();
  });
});
