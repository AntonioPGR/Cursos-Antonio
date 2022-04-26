// import { Logins } from "../models/logins";

import { Logins } from "../models/logins.js";
import { View } from "./view.js";

export class LoginsView extends View <Logins>{
  /**
   * Cria o template da view dos logins
   * @returns a string contendo o template a ser renderizado
   */
  protected template(models:Logins) : string {

    return `
      <table class="table table-hover table-bordered" >
        <thead>
          <tr>
            <th> WEBSITE </th>
            <th> USUÁRIO </th>
            <th> SENHA </th>
            <th> C.D.R. </th>
            <th> DATA DE CRIAÇÃO </th>
          </tr>
        </thead>
        <tbody>
          ${this.renderLogins(models)}
        </tbody>
      </table>
    `;

  }

  /**
   * Renderiza cada linha da tabela
   */
  private renderLogins(models:Logins) : string{

    const logins = models.lista();
    return logins.map((login)=>{
      return `
        <tr>
          <td> ${login.site} </td>
          <td> ${login.usuario} </td>
          <td> ${login.senha} </td>
          <td> ${login.codigoDeRecuperacao} </td>
          <td> ${ new Intl.DateTimeFormat().format(login.dataDeCriacao) } </td>
        </tr>
      `
    }).join('');

  }

}