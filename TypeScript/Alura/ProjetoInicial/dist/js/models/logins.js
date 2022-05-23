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
    paraTexto() {
        return JSON.stringify(this.logins, null, 2);
    }
    get logins() {
        return this._logins;
    }
}
