import { Imprimivel } from "../utils/imprimivel.js";

export class Login implements Imprimivel{

  constructor(
    public readonly usuario : string, 
    public readonly senha : string, 
    public readonly site : string, 
    public readonly codigoDeRecuperacao : string,
    private readonly _dataDeCriacao : Date = new Date()
  ){}

  public paraTexto(){
    return `
Usuário: ${this.usuario}
Senha: ${this.senha}
WebSite: ${this.site}
Cdr: ${this.codigoDeRecuperacao}
Data: ${this.dataDeCriacao}
    `
  }
  
  get dataDeCriacao(): Date {

    const data = this._dataDeCriacao.getTime()
    const clonedData = new Date(data);
    return clonedData;
    
  }

}

