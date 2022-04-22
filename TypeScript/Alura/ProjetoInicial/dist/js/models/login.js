export class Login {
    constructor(usuario, senha, site, codigoDeRecuperacao) {
        this.usuario = usuario;
        this.senha = senha;
        this.site = site;
        this.codigoDeRecuperacao = codigoDeRecuperacao;
        this._dataDeCriacao = new Date();
    }
    get dataDeCriacao() {
        const data = this._dataDeCriacao.getTime();
        const clonedData = new Date(data);
        return clonedData;
    }
}
