import { Login } from "../models/login.js";
export class LoginServices {
    static obterLoginsGravados() {
        const apiUrl = "http://localhost:8080/dados";
        return fetch(apiUrl)
            .then((res) => res.json())
            .then((logins) => {
            return logins.map((login) => {
                return LoginServices.converterParaLogin(login);
            });
        });
    }
    static converterParaLogin(loginData) {
        let date;
        try {
            date = new Date(loginData.dia);
        }
        catch (_a) {
            date = undefined;
        }
        let login;
        if (date) {
            login = new Login(loginData.usuario, loginData.senha, loginData.website, loginData.cdr, date);
        }
        else {
            login = new Login(loginData.usuario, loginData.senha, loginData.website, loginData.cdr);
        }
        return login;
    }
}
