import { Login } from "./login.js";
import { GeradorSenha } from "./senha.js";
// faz o controle da criação de logins, verificando e aprovando ou resusando-o 
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
            this.gerarSenha();
        }
        else {
            throw new Error("Can't create the controller, input haven't been created yet");
        }
    }
    /**
     * Adiciona o login atual do formulário ao banco de dados
     */
    adicionar() {
        // checa se os parâmetros são validos para a efetuação da adição
        if (!this.informacoesCorretas()) {
            return;
        }
        const loginInfo = this.informacoesDeLogin;
        const login = new Login(loginInfo.usuario, loginInfo.senha, loginInfo.website, loginInfo.codigoDeRecuperacao);
        console.log(login);
    }
    /**
     * Checa se as informações passadas são validas
     */
    informacoesCorretas() {
        return true;
    }
    /**
     * Limpa os dados do formulário
     */
    limparFormulario() {
        if (this.inputCodigoDeRecuperacao && this.inputSenha && this.inputUsuario && this.inputWebsite) {
            this.inputCodigoDeRecuperacao.value = '';
            this.inputSenha.value = '';
            this.inputUsuario.value = '';
            this.inputWebsite.value = '';
            this.inputWebsite.focus();
        }
    }
    /**
     * constroi uma nova senha e insere no formulário
     */
    gerarSenha() {
        const senha = this.construtorSenha();
        this.inserirSenha(senha);
    }
    /**
     * Gera uma nova senha aleatória
     * @returns senha gerada
     */
    construtorSenha() {
        // Configurações para a senha gerada
        const senhaConfig = {
            charactMin: "abcdefghijklmnopqrstuvwxyz",
            charactMaisc: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            numeros: "123456789",
            simbolos: "+-[]{}/?!@#$%&*"
        };
        const gerador = new GeradorSenha(senhaConfig.charactMin, senhaConfig.charactMaisc, senhaConfig.numeros, senhaConfig.simbolos);
        return gerador.gerarSenha();
    }
    /**
     * Insere a senha passada no input de senhas
     */
    inserirSenha(senha) {
        if (this.inputSenha) {
            this.inputSenha.value = senha;
        }
    }
    // GETTERS ----------
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
