import { Component, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ModalImagePerfilService } from '../services/modal-image-perfil.service';


@Component({
  selector: 'app-modal-image-perfil-content',
  templateUrl: './modal-image-perfil-content.component.html',
  styleUrls: ['./modal-image-perfil-content.component.css']
})
export class ModalImagePerfilContentComponent {
  showCropper = true;
  photoSelected = false;
  imageChangedEvent: any;
  croppedImage: any;
  constructor(public modalRef: BsModalRef, private modalImagePerfilService: ModalImagePerfilService) { }

  closeModal() {
    this.modalRef.hide();
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.base64;
  }

  uploadImage(): void {
    // Lógica para guardar la imagen recortada en el currículum
    console.log('Imagen cargada:', this.croppedImage);
    this.showCropper = false;

    if (this.croppedImage) {
      this.modalImagePerfilService.setImage(this.croppedImage);
        this.photoSelected = true;
        this.closeModal();
      } else {
        // Mostrar un aviso de que no se ha seleccionado una foto
      }    
  }

}
