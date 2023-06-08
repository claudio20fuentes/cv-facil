import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImagePerfilContentComponent } from './modal-image-perfil-content.component';

describe('ModalImagePerfilContentComponent', () => {
  let component: ModalImagePerfilContentComponent;
  let fixture: ComponentFixture<ModalImagePerfilContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalImagePerfilContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalImagePerfilContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
