import { LoginsView } from "../views/logins-view.js";
import { MensagensViews } from "../views/mensagens-view.js";
import { Login } from "./login.js";
import { Logins } from "./logins.js";
import { Senha } from "./senha.js";
export class LoginsController {
    constructor() {
        const inputWebsite = document.querySelector("input#website");
        const inputUser = document.querySelector("input#usuario");
        const inputCdr = document.querySelector("input#crd");
        const inputPassword = document.querySelector("input#senha");
        if (inputWebsite && inputUser && inputCdr && inputPassword) {
            this._inputWebsite = inputWebsite;
            this._inputUsuario = inputUser;
            this._inputCodigoDeRecuperacao = inputCdr;
            this._inputSenha = inputPassword;
            this.logins = new Logins();
            const loginsViewRenderLocal = document.querySelector("#senhasView");
            this.loginsView = new LoginsView(loginsViewRenderLocal);
            this.loginsView.update(this.logins);
            const msgsViewRenderLocal = document.querySelector("#mensagemView");
            this.msgsView = new MensagensViews(msgsViewRenderLocal);
            this.gerarSenha();
        }
        else {
            throw new Error("Can't create the controller, input haven't been created yet");
        }
    }
    adicionar() {
        if (!this.checkInformacoesEstaoCorretas()) {
            return;
        }
        const loginInfo = this.informacoesDeLogin;
        const login = new Login(loginInfo.usuario, loginInfo.senha, loginInfo.website, loginInfo.codigoDeRecuperacao);
        this.logins.adiciona(login);
        this.limparFormulario();
        this.atualizaViews();
        this.limparFormulario();
    }
    atualizaViews() {
        this.loginsView.update(this.logins);
        this.msgsView.update("Seu login foi realizado com sucesso!");
    }
    checkInformacoesEstaoCorretas() {
        return true;
    }
    limparFormulario() {
        if (this.inputCodigoDeRecuperacao && this.inputSenha && this.inputUsuario && this.inputWebsite) {
            this.inputCodigoDeRecuperacao.value = '';
            this.inputSenha.value = '';
            this.inputUsuario.value = '';
            this.inputWebsite.value = '';
            this.inputWebsite.focus();
            this.gerarSenha();
        }
    }
    gerarSenha() {
        const senhaConfig = {
            charactMin: "abcdefghijklmnopqrstuvwxyz",
            charactMaisc: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            numeros: "123456789",
            simbolos: "+-[]{}/?!@#$%&*"
        };
        const gerador = new Senha(senhaConfig, this.inputSenha);
        gerador.gerarSenha();
    }
    get informacoesDeLogin() {
        return {
            website: this.inputWebsite.value,
            usuario: this.inputUsuario.value,
            senha: this.inputSenha.value,
            codigoDeRecuperacao: this.inputCodigoDeRecuperacao.value
        };
    }
    get inputWebsite() {
        return this._inputWebsite;
    }
    get inputUsuario() {
        return this._inputUsuario;
    }
    get inputSenha() {
        return this._inputSenha;
    }
    get inputCodigoDeRecuperacao() {
        return this._inputCodigoDeRecuperacao;
    }
}
