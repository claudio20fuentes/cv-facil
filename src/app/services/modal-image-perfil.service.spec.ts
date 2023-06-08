import { TestBed } from '@angular/core/testing';

import { ModalImagePerfilService } from '../modal-image-perfil.service';

describe('ModalImagePerfilService', () => {
  let service: ModalImagePerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalImagePerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
