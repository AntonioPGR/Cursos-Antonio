export class Logins {
    constructor() {
        this._logins = [];
    }
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
