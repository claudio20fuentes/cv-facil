export class Experiencia{

    private _mesInicio: string = "";
    private _anoInicio: string = "";
    private _mesFin: string = "";
    private _anoFin: string = "";
    private _empleador: string = "";
    private _puesto: string = "";
    private _obligaciones: string = "";

    constructor(mesInicio: string = "",anoInicio: string = "",mesFin: string = "",anoFin: string = "",empleador: string = "",puesto: string = "",obligaciones: string = ""){
        this._mesInicio = mesInicio;
        this._anoInicio = anoInicio;
        this._mesFin = mesFin;
        this._anoFin = anoFin;
        this._empleador = empleador;
        this._puesto = puesto;
        this._obligaciones = obligaciones;
    }   

    get mesInicio():string{
        return this._mesInicio;
    } 
    set mesInicio(valor:string){
        this._mesInicio = valor;
    }
    get anoInicio():string{
        return this._anoInicio;
    } 
    set anoInicio(valor:string){
        this._anoInicio = valor;
    }
    get mesFin():string{
        return this._mesFin;
    } 
    set mesFin(valor:string){
        this._mesFin = valor;
    }
    get anoFin():string{
        return this._anoFin;
    } 
    set anoFin(valor:string){
        this._anoFin = valor;
    }
    get empleador():string{
        return this._empleador;
    } 
    set empleador(valor:string){
        this._empleador = valor;
    }
    get puesto():string{
        return this._puesto;
    } 
    set puesto(valor:string){
        this._puesto = valor;
    }
    get obligaciones():string{
        return this._obligaciones;
    } 
    set obligaciones(valor:string){
        this._obligaciones = valor;
    }
}