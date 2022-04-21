export class Logins {
    constructor() {
        this._logins = [];
    }
    /**
     * adiciona um login a tabela
     * @param login login a ser adicionado
     */
    adiciona(login) {
        this._logins.push(login);
    }
    lista() {
        return this.logins;
    }
    get logins() {
        return this._logins;
    }
}
