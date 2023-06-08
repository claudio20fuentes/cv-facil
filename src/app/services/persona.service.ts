import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private nombreSubject = new Subject<string>();

  constructor() { }

  setNombre(nombre: string): void {
    this.nombreSubject.next(nombre);
  }

  getNombreSubject(): Subject<string> {
    return this.nombreSubject;
  }
}
