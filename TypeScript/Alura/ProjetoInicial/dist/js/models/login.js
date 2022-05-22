export class Login {
    constructor(usuario, senha, site, codigoDeRecuperacao, _dataDeCriacao = new Date()) {
        this.usuario = usuario;
        this.senha = senha;
        this.site = site;
        this.codigoDeRecuperacao = codigoDeRecuperacao;
        this._dataDeCriacao = _dataDeCriacao;
    }
    get dataDeCriacao() {
        const data = this._dataDeCriacao.getTime();
        const clonedData = new Date(data);
        return clonedData;
    }
}
