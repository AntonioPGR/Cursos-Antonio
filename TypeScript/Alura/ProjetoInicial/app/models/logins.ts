import { Login } from "./login.js";

export class Logins{

  private readonly _logins : Login[] = [];

  /**
   * adiciona um login a tabela
   * @param login login a ser adicionado
   */
  public adiciona(login:Login):void{

    this._logins.push(login);

  }

  public lista() : readonly Login[] {
    
    return this.logins;

  }

  private get logins() : Array<Login> {
    return this._logins
  }

}