import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalImagePerfilContentComponent } from '../modal-image-perfil-content/modal-image-perfil-content.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalImagePerfilService {

  private imageSource = new Subject<any>();
  image$ = this.imageSource.asObservable();

  setImage(imageUrl: any) {
    this.imageSource.next(imageUrl);
  }





  private modalRef: BsModalRef;

  constructor(private modalImagePerfilService: BsModalService) { }

  openModal(modalComponent: any) {
    this.modalRef = this.modalImagePerfilService.show(ModalImagePerfilContentComponent);
  }

  closeModal() {
    this.modalRef.hide();
  }  
}
