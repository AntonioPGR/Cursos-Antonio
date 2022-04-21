export class Login {
    constructor(usuario, senha, site, cdr) {
        this._usuario = usuario;
        this._senha = senha;
        this._site = site;
        this._codigoDeRecuperacao = cdr;
        this._dataDeCriacao = new Date();
    }
    // GETTERS ----------
    get usuario() {
        return this._usuario;
    }
    get senha() {
        return this._senha;
    }
    get site() {
        return this._site;
    }
    get codigoDeRecuperacao() {
        return this._codigoDeRecuperacao;
    }
    get dataDeCriacao() {
        return this._dataDeCriacao;
    }
}
