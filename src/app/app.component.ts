import { Component } from '@angular/core';
import { Curriculum } from './model/curriculum.model';
import { Formacion } from './model/formacion.model';
import { Personita } from './model/Personita';
import { Experiencia } from './model/experiencia.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'generador-curriculum';

  formaciones: Formacion[] = [];
  experiencias: Experiencia[] = [];



//VARIABLES DE LOS DATOS PERSONALES, NO TOCAR
  copiedValueName: string = '';
  copiedValueEmail: string = '';
  copiedValuePhone: string = '';
  copiedValueAddress: string = '';
  copiedValueProfession: string = '';
  copiedValueDescription: string = '';
  copiedValueDay: string = '';
  copiedValueMonth: string = '';
  copiedValueYear: string = '';
  copiedValueImage: any ;
  
  //FORMACION

  copiedValueCarrera = "";

  constructor(){
  }

  onInputChangeCarrera(value:string){
    this.copiedValueCarrera = value;
  }
  onInputChangeImage(value: any) {
    this.copiedValueImage = value;
  }
  onInputChangeName(value: string) {
    this.copiedValueName = value;
  }
  onInputChangeEmail(value: string) {
    this.copiedValueEmail = value;
  }
  onInputChangePhone(value: string) {
    this.copiedValuePhone = value;
  }
  onInputChangeAddress(value: string) {
    this.copiedValueAddress = value;
  }
  onInputChangeDay(value: string){
    this.copiedValueDay = value;
  }  
  onInputChangeMonth(value: string){
    this.copiedValueMonth = value;
  }  
  onInputChangeYear(value: string){
    this.copiedValueYear = value;
  }
  onInputChangeProfession(value: string){
    this.copiedValueProfession = value;
  }
  onInputChangeDescription(value: string){
    this.copiedValueDescription = value;
  }



  agregarFormacion(formacion: Formacion) {
    this.formaciones.push(formacion);
  }
  agregarExperiencia(experiencia: Experiencia){
    this.experiencias.push(experiencia);
  }

  isShaking: boolean = false;

  startShake() {
    this.isShaking = true;
    setTimeout(() => {
      this.isShaking = false;
    }, 1000);
  }
}
