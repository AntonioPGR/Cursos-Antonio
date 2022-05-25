var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { domInjector } from "../decorators/dom-inject.js";
import { LoginServices } from "../services/obterLoginsGravados.js";
import { imprimir } from "../utils/imprimir.js";
import { LoginsView } from "../views/logins-view.js";
import { MensagensViews } from "../views/mensagens-view.js";
import { Login } from "./login.js";
import { Logins } from "./logins.js";
import { Senha } from "./senha.js";
export class LoginsController {
    constructor() {
        this.logins = new Logins();
        const loginsViewRenderLocal = document.querySelector("#senhasView");
        this.loginsView = new LoginsView(loginsViewRenderLocal);
        this.loginsView.update(this.logins);
        const msgsViewRenderLocal = document.querySelector("#mensagemView");
        this.msgsView = new MensagensViews(msgsViewRenderLocal);
        this.gerarSenha();
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
    atualizaViews(sendMSG = true) {
        this.loginsView.update(this.logins);
        if (sendMSG) {
            this.msgsView.update("Seu login foi realizado com sucesso!");
        }
    }
    buscarInformacoes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.msgsView.update("Buscando por logins já registrados!");
                const logins = yield LoginServices.obterLoginsGravados();
                if (logins.length === 0) {
                    this.msgsView.update('Não foi possivel encontrar nenhum login cadastrado!');
                    return;
                }
                logins.map((novoLogin) => {
                    let ehIgual = false;
                    this.logins.lista().map((loginJaRegistrado) => {
                        if (novoLogin.ehIgual(loginJaRegistrado)) {
                            ehIgual = true;
                            console.log(`${novoLogin} == ${loginJaRegistrado}`);
                        }
                    });
                    if (!ehIgual) {
                        this.logins.adiciona(novoLogin);
                    }
                });
                imprimir(...logins);
                this.msgsView.update('Logins importados com sucesso!');
                this.atualizaViews(false);
            }
            catch (_a) {
                this.msgsView.update("Não foi possivel encontrar nenhum login!");
            }
        });
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
__decorate([
    domInjector("input#website")
], LoginsController.prototype, "_inputWebsite", void 0);
__decorate([
    domInjector("input#usuario")
], LoginsController.prototype, "_inputUsuario", void 0);
__decorate([
    domInjector("input#crd")
], LoginsController.prototype, "_inputCodigoDeRecuperacao", void 0);
__decorate([
    domInjector("input#senha")
], LoginsController.prototype, "_inputSenha", void 0);
//# sourceMappingURL=loginsController.js.map