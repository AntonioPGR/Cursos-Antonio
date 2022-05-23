import { informacoesDeLogin } from "../interfaces/informacoesDeLogin";
import { Login } from "../models/login.js";
import { MensagensViews } from "../views/mensagens-view";


export class LoginServices{

  static obterLoginsGravados() : Promise<Login[]>{

    const apiUrl : string = "http://localhost:8080/dados";
  
    return fetch(apiUrl)
      .then((res) => res.json())
      .then((logins:informacoesDeLogin[]) => {
        return logins.map((login) => {
          return LoginServices.converterParaLogin(login)
        })
      })
      .catch((e) => {
        console.log(e)
        return []
      })
  
  }

  static converterParaLogin(loginData:informacoesDeLogin) : Login{

    let date;
    try{
      date = new Date(loginData.dia)
    } catch {
      date = undefined
    }

    let login;
    if(date){
      login = new Login(loginData.usuario, loginData.senha, loginData.website, loginData.cdr, date)
    } else {
      login = new Login(loginData.usuario, loginData.senha, loginData.website, loginData.cdr)
    }
    return login

  }

}