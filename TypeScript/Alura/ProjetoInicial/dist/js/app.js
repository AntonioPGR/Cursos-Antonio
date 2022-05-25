import { LoginsController } from "./models/loginsController.js";
const loginController = new LoginsController();
window.onload = (ev) => {
    ev.preventDefault();
    loginController.gerarSenha();
    const gerarSenhaBotao = document.querySelector("button#gerarSenha");
    if (gerarSenhaBotao) {
        gerarSenhaBotao.addEventListener('click', (ev) => {
            ev.preventDefault();
            loginController.gerarSenha();
        });
    }
    else {
        throw Error("Não foi possivel Iniciar a aplicação, verifique se o Button de senhas existe");
    }
    ;
    const importarBotao = document.querySelector("#botao-importar");
    importarBotao.addEventListener('click', (ev) => {
        ev.preventDefault();
        loginController.buscarInformacoes();
    });
    const formIncluir = document.querySelector("form#formSenhas");
    if (formIncluir) {
        formIncluir.addEventListener('submit', (ev) => {
            ev.preventDefault();
            console.clear();
            loginController.adicionar();
        });
    }
    else {
        throw Error("Não foi possivel Iniciar a aplicação, verifique se o Form existe");
    }
    ;
};
//# sourceMappingURL=app.js.map