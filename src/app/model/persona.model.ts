export class Persona{

    private _nombre: string = "";
    private _email: string = "";
    private _telefono: string = "";
    //falta fecha nacimiento
    private _direccion: string = "";
    private _profesion: string = "";
    private _descripcion: string = "";

    constructor(nombre: string="",email: string="",
                telefono: string="", direccion: string="",profesion: string="",descripcion:string=""){
    
        this._nombre = nombre;
        this._email = email;
        this._telefono = telefono;
        this._direccion = direccion;
        this._profesion = profesion;
        this._descripcion = descripcion;

    }

    get nombre(): string {
        return this._nombre;
      }
    
    set nombre(valor: string) {
        this.nombre = valor;
      }

    get email(): string{
        return this._email;
    }
    set email(valor: string){
        this._email = valor;
    }

    get telefono():string{
        return this._telefono;
    }
    set telefono(valor:string){
        this._telefono = valor;
    }

    get direccion():string{
        return this._direccion;
    }

    set direccion(valor:string){
        this._direccion = valor;
}
    get profesion():string{
        return this._profesion;
    }
    set profesion(valor:string){
         this._profesion = valor;
    }
    get descripcion():string{
        return this._descripcion;
    }
    set descripcion(valor:string){
        this._descripcion = valor;

    }
}