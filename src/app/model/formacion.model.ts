export class Formacion{

    private _mesInicio: string = "";
    private _anoInicio: string = "";
    private _mesFin: string = "";
    private _anoFin: string = "";
    private _entidadEducativa: string = "";
    private _carrera: string = "";
    
    constructor(mesInicio: string = "",anoInicio: string = "",mesFin: string = "",anoFin: string = "",entidadEducativa: string = "",carrera: string = ""){
        this._mesInicio = mesInicio;
        this._anoInicio = anoInicio;
        this._mesFin = mesFin;
        this._anoFin = anoFin;
        this._entidadEducativa = entidadEducativa;
        this._carrera = carrera;      
    }

    get mesInicio():string{
        return this._mesInicio;
    }
    set mesInicio(valor: string){
        this._mesInicio = valor;
    }
    get anoInicio():string{
        return this._anoInicio;
    }
    set anoInicio(valor: string){
        this._anoInicio = valor;
    }
    get mesFin():string{
        return this._mesFin;
    }
    set mesFin(valor: string){
        this._mesFin = valor;
    }
    get anoFin():string{
        return this._anoFin;
    }
    set anoFin(valor: string){
        this._anoFin = valor;
    }
    get entidadEducativa():string{
        return this._entidadEducativa;
    }
    set entidadEducativa(valor: string){
        this._entidadEducativa = valor;
    }
    get carrera():string{
        return this._carrera;
    }
    set carrera(valor: string){
        this._carrera =valor;
    }
}