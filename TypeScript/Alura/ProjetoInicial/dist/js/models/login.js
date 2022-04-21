export class Login {
    constructor(usuario, senha, site, codigoDeRecuperacao) {
        this.usuario = usuario;
        this.senha = senha;
        this.site = site;
        this.codigoDeRecuperacao = codigoDeRecuperacao;
        this._dataDeCriacao = new Date();
    }
    get dataDeCriacao() {
        const clonedData = new Date(this._dataDeCriacao.getDate());
        return clonedData;
    }
}
