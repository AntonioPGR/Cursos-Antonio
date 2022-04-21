export class Login{

  private _dataDeCriacao = new Date();
  constructor(
    public readonly usuario : string, 
    public readonly senha : string, 
    public readonly site : string, 
    public readonly codigoDeRecuperacao : string
  ){}
  
  get dataDeCriacao(): Date {
    const clonedData = new Date(this._dataDeCriacao.getDate());
 
    return clonedData;
  }

}

