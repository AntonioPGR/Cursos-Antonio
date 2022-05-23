export class Login {
    constructor(usuario, senha, site, codigoDeRecuperacao, _dataDeCriacao = new Date()) {
        this.usuario = usuario;
        this.senha = senha;
        this.site = site;
        this.codigoDeRecuperacao = codigoDeRecuperacao;
        this._dataDeCriacao = _dataDeCriacao;
    }
    paraTexto() {
        return `
Usuário: ${this.usuario}
Senha: ${this.senha}
WebSite: ${this.site}
Cdr: ${this.codigoDeRecuperacao}
Data: ${this.dataDeCriacao}
    `;
    }
    get dataDeCriacao() {
        const data = this._dataDeCriacao.getTime();
        const clonedData = new Date(data);
        return clonedData;
    }
}
