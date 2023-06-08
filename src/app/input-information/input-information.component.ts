import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { Curriculum } from '../model/curriculum.model';
import { Persona } from '../model/persona.model';
import { Experiencia } from '../model/experiencia.model';
import { Formacion } from '../model/formacion.model';
import { Personita } from '../model/Personita';
import { Idioma } from '../model/idioma.model';
import { Interes } from '../model/interes.model';
import { CheckboxRequiredValidator, FormBuilder, FormGroup } from '@angular/forms';
import { PersonaService } from '../services/persona.service';

import { ImageCroppedEvent } from 'ngx-image-cropper';

import { ModalImagePerfilService } from '../services/modal-image-perfil.service';
import { ModalImagePerfilContentComponent } from '../modal-image-perfil-content/modal-image-perfil-content.component';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-input-information',
  templateUrl: './input-information.component.html',
  styleUrls: ['./input-information.component.css']
})

export class InputInformationComponent {

  //Imagen
  showCropper = true;
  imageChangedEvent: any;
  croppedImage: any;
  modalRef: BsModalRef;
  //CLASES
  curriculum: Curriculum;
  persona: Persona;
  formacion:Formacion;
  experiencia: Experiencia;
  idioma: Idioma;
  interes: Interes;
  //VALORES DEL FORMULARIO, VALORES DE LAS PROPIEDADADES DE LA CLASE PERSONA.
  inputValueName: string = '';
  inputValueEmail: string = '';
  inputValuePhone: string = '';  
  inputValueDay: string = '';
  inputValueMonth: string = '';
  inputValueYear: string = '';
  inputValueAddress: string = '';
  inputValueProfession: string = '';
  inputValueDescription: string = '';
  //VALORES QUE SE ENVIAN A LA VISTA PREVIA
  @Output() inputChangedName = new EventEmitter<string>();
  @Output() inputChangedEmail = new EventEmitter<string>();
  @Output() inputChangedPhone = new EventEmitter<string>();
  @Output() inputChangedAddress = new EventEmitter<string>();
  @Output() inputChangedDay = new EventEmitter<string>();
  @Output() inputChangedMonth = new EventEmitter<string>();
  @Output() inputChangedYear = new EventEmitter<string>();
  @Output() inputChangedProfession = new EventEmitter<string>();
  @Output() inputChangedDescription = new EventEmitter<string>();
  @Output() imagen = new EventEmitter<any>();
  //Sirve para enviar un curriculum, revisar si se esta utilizando, de lo contrario se elimina
  @Output() inputChangedCurriculum = new EventEmitter<Curriculum>();
  //MANDANDO UNA FORMACIÓN
  @Output() inputChangeFormacion = new EventEmitter<Formacion>();
  //MANDANDO UNA EXPERIENCIA
  @Output() inputChangueExperiencia = new EventEmitter<Experiencia>();
  @Output() formacionCreada = new EventEmitter<Formacion>();
  @Output() experienciaCreada = new EventEmitter<Experiencia>();

  constructor(private modalImagePerfilService: ModalImagePerfilService){
    this.curriculum = new Curriculum();
  }

  ngOnInit() {
    this.modalImagePerfilService.image$.subscribe((imageUrl) => {
      this.imagen.emit(imageUrl);

      console.log("hola como esta: yo bien y tu: bien gracias: mamita querida");
      // Aquí puedes realizar cualquier lógica adicional con la imagen
    });
  }

  openModal() {
    this.modalImagePerfilService.openModal(ModalImagePerfilContentComponent);
  }

  agregarFormacion() {
    this.formacion = new Formacion();
    this.curriculum.formaciones.push(this.formacion)

    this.formacionCreada.emit(this.formacion);

    //INSTANCIANDO UNA FORMACIÓN
    //this.formacion = new Formacion();
    //this.formacion.carrera = this.inputValueCarrera;
    //this.inputChangeFormacion.emit(this.formacion);
    //this.curriculum.formaciones.push(this.formacion);
    //EMITIENDO formaciones
    //this.inputChangeFormacion.emit(this.formacion);
    //console.log(this.curriculum);
  }

  agregarExperiencia() {

    this.experiencia = new Experiencia();

    this.curriculum.experiencias.push(this.experiencia);

    this.experienciaCreada.emit(this.experiencia);

  }

  mostrar(){
    
    console.log(this.curriculum.persona);
    console.log(this.curriculum.formaciones);
    
  }

  createPerson(){
    
    this.persona = new Persona(this.inputValueName,this.inputValueEmail,this.inputValuePhone,
                   this.inputValueAddress,this.inputValueProfession,this.inputValueDescription
                   );
    
    this.curriculum.persona = this.persona;
    console.log(this.curriculum.persona);

  }

  onInputChangeFormacion(){
    this.inputChangeFormacion.emit(this.formacion);
    console.log("aca"+this.inputChangeFormacion);
  }
  onInputChangueNameBeta(){
    this.inputChangedName.emit(this.inputValueName);
  }
  onInputChangueEmail(){
    this.inputChangedEmail.emit(this.inputValueEmail);
  }
  onInputChangueDay(){
    this.inputChangedDay.emit(this.inputValueDay);
  }
  onInputChangueMonth(){
    this.inputChangedMonth.emit(this.inputValueMonth);
  }
  onInputChangueYear(){
    this.inputChangedYear.emit(this.inputValueYear);
  }    
  onInputChanguePhone(){
    this.inputChangedPhone.emit(this.inputValuePhone);
  }
  onInputChangueAddress(){
    this.inputChangedAddress.emit(this.inputValueAddress);
  }
  onInputChangueProfession(){
    this.inputChangedProfession.emit(this.inputValueProfession);
  }
  onInputChangueDescription(){
    this.inputChangedDescription.emit(this.inputValueDescription);
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
    this.imagen.emit(this.croppedImage);
    this.showCropper = false;
    console.log(this.imagen);
  }

  closeModal() {
    this.modalRef.hide();
  }

}
