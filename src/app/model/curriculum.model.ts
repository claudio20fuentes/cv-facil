import { Experiencia } from "./experiencia.model";
import { Formacion } from "./formacion.model";
import { Idioma } from "./idioma.model";
import { Interes } from "./interes.model";
import { Persona } from "./persona.model";

export class Curriculum{

    private _persona:Persona;
    private _experiencias:Experiencia[]=[];    
    private _intereses:Interes[]=[];
    private _idiomas:Idioma[]=[];
    private _formaciones:Formacion[]=[];

    constructor(){
        this._persona = new Persona();
        this._experiencias = [];
        this._intereses = [];
        this._idiomas = [];
        this._formaciones = [];
    }

get persona():Persona{
    return this._persona;
}

set persona(valor:Persona){
    this._persona = valor;
}

get experiencias():Experiencia[]{
    return this._experiencias;
}

set experiencias(valor:Experiencia[]){
    this._experiencias = valor;
}
get intereses():Interes[]{
    return this._intereses;
}
set intereses(valor: Interes[]){
    this._intereses = valor;
}

get idiomas():Idioma[]{
    return this._idiomas;
}
set idiomas(valor:Idioma[]){
    this._idiomas = valor;
}

get formaciones():Formacion[]{
    return this._formaciones;
}
set formaciones(valor: Formacion[]){
    this._formaciones = valor;
}
}