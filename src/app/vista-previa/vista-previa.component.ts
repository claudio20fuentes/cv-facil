import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Curriculum } from '../model/curriculum.model';
import { Formacion } from '../model/formacion.model';
import { Personita } from '../model/Personita';
import { Subscription } from 'rxjs';
import { PersonaService } from '../services/persona.service';
import { Experiencia } from '../model/experiencia.model';
import jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js'
import { Persona } from '../model/persona.model';
@Component({
  selector: 'app-vista-previa',
  templateUrl: './vista-previa.component.html',
  styleUrls: ['./vista-previa.component.css']
})
export class VistaPreviaComponent implements OnInit {

  curriculumHard : Curriculum;
  personaHard : Persona;
  experienciasHard : Experiencia[];
  formacionesHard : Formacion[];

  @ViewChild('pdfContent') pdfContent: ElementRef;



  generatePDF() {

      const options = {
        margin: 5,
        image: { type: 'jpeg', quality: 0.95 },
        scale: 0.8,
        filename: 'miCurriculum.pdf',
        html2canvas : {  escala : 2 } ,
  };
    const content = this.pdfContent.nativeElement;
    html2pdf().set(options).from(content).save();
  }


ngOnInit(){

  //HARDCODEO DEL CURRICULUM
  const persona = new Persona("Claudio Andres Fuentes Bustos","claudio20fuentes@gmail.com","989194140","19 norte","Desarrollador de Software","Desarrollador de software con experiencia en diseño, instalacion, pruebas y mantenimiento de sistemas de"+
                  "software. Dominio de varias plataformas, lenguajes y sistemas integrados. Experiencia en las herramientas y"+
  "procedimientos de desarollo más vanguardistas. Capaz de autogestión eficaz en proyectos independientes."+
  "Buenas habilidades de colaboración dentro de un equipo productivo");
  

  this.experienciasHard = [
    new Experiencia("09","2022","05","2023","Falabella s.a","Desarrollador de software","Responsable de crear funcionalidades y módulos para aplicaciones"+
                                                                                         "empresariales, siguiendo los requerimientos de la jefatura. Colaboración en"+
                                                                                         "el ciclo completo de desarrollo de software, desde análisis hasta"+
                                                                                         "implementación y pruebas. Uso de tecnologías específicas para programar"+
                                                                                         "código limpio y eficiente. Mantenimiento y mejora de aplicaciones existentes."+
                                                                                         "Trabajo en equipo y participación en reuniones de seguimiento de proyectos."
),
    new Experiencia("08","2020","08","2021","Banco de chile s.a","Desarrollador de software","Participé en una práctica profesional en la financiera Oriencoop, donde"+
                                                                                              "contribuí en el desarrollo de módulos para una aplicación de generación de"+
                                                                                              "créditos agrícolas. Durante mi tiempo en Oriencoop, diseñé, implementé y"+
                                                                                              "probé funcionalidades clave del sistema. Trabajé en estrecha colaboración"+
                                                                                              "con el equipo de desarrollo y recibí supervisión de profesionales senior. Esta"+
                                                                                              "experiencia me permitió adquirir conocimientos prácticos en tecnologías"+
                                                                                              "relevantes para aplicaciones financieras."
)
  ];
  this.formacionesHard = [
    new Formacion("03","2022","12","2023","Universidad Católica del Maule","Ingeniería en ejecución en computación e informática"),
    new Formacion("04","2017","23","2020","Cft San Agustin","Analista programador"),
  ];

  const curriculum = new Curriculum();
  this.curriculumHard = curriculum;
  this.curriculumHard.persona = persona;

  this.curriculumHard.persona = persona;
  this.curriculumHard.experiencias = this.experienciasHard;
  this.curriculumHard.formaciones = this.formacionesHard;

  console.log(this.curriculumHard);
  console.log(this.curriculumHard.persona);
  console.log(this.curriculumHard.experiencias);
  console.log(this.curriculumHard.formaciones);

}

  constructor(){
  }


  //declarar objetos objetos que vienen desde el formulario, definitivos
  @Input() inputValueName: string = "";
  @Input() inputValueEmail: string = "";
  @Input() inputValuePhone: string = "";
  @Input() inputValueAddress: string = "";
  @Input() inputValueProfession: string = "";
  @Input() inputValueDescription: string = "";
  @Input() inputValueDay: string = "";
  @Input() inputValueMonth: string = "";
  @Input() inputValueYear: string = "";

  @Input() inputValueCarrera: string;

  @Input() inputValueImage: any;

  @Input() formaciones: Formacion[] = [];
  @Input() experiencias: Experiencia[] = [];

  //Momentanea
verFormaciones(){
  console.log(this.formaciones);
}

}
