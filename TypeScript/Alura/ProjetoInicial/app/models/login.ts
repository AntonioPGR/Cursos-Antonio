export class Login{

  constructor(
    public readonly usuario : string, 
    public readonly senha : string, 
    public readonly site : string, 
    public readonly codigoDeRecuperacao : string,
    private readonly _dataDeCriacao : Date = new Date()
  ){}
  
  get dataDeCriacao(): Date {

    const data = this._dataDeCriacao.getTime()
    const clonedData = new Date(data);
    return clonedData;
    
  }

}

