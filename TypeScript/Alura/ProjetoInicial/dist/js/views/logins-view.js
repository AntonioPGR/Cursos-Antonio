// import { Logins } from "../models/logins";
export class LoginsView {
    constructor(localRenderizacao) {
        this.localRenderizacao = localRenderizacao;
    }
    /**
     * Cria o template da view dos logins
     * @returns a string contendo o template a ser renderizado
     */
    template(models) {
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
    renderLogins(models) {
        const logins = models.lista();
        return logins.map((login) => {
            return `
        <tr>
          <td> ${login.site} </td>
          <td> ${login.usuario} </td>
          <td> ${login.senha} </td>
          <td> ${login.codigoDeRecuperacao} </td>
          <td> ${new Intl.DateTimeFormat().format(login.dataDeCriacao)} </td>
        </tr>
      `;
        }).join('');
    }
    /**
     * Renderiza o template atual na tela
     */
    update(logins) {
        const models = logins;
        const local = this.localRenderizacao;
        local.innerHTML = "";
        local.innerHTML = this.template(models);
    }
}
