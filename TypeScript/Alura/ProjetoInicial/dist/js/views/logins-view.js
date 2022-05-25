var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { escapeScript } from "../decorators/escape-script.js";
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
__decorate([
    escapeScript()
], LoginsView.prototype, "template", null);
//# sourceMappingURL=logins-view.js.map