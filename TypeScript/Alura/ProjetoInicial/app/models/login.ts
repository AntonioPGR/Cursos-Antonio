export class Login{

  private _dataDeCriacao = new Date();
  constructor(
    public readonly usuario : string, 
    public readonly senha : string, 
    public readonly site : string, 
    public readonly codigoDeRecuperacao : string
  ){}
  
  get dataDeCriacao(): Date {

    const data = this._dataDeCriacao.getTime()
    const clonedData = new Date(data);
    return clonedData;
    
  }

}

