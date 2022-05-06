import { View } from "./view.js";
export class LoginsView extends View {
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
}
