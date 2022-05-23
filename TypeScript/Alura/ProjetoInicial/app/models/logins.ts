import { Imprimivel } from "../utils/imprimivel.js";
import { Login } from "./login.js";

export class Logins implements Imprimivel{

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

  public paraTexto(){
    return JSON.stringify(this.logins, null, 2)
  }

  private get logins() : Array<Login> {
    return this._logins
  }

}