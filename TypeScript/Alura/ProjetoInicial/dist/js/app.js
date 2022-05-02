import { LoginsController } from "./models/loginsController.js";
// cria a classe controladora do formulário
const loginController = new LoginsController();
// AO CARREGAR O DOCUMENTO -------------------------------------------------
window.onload = (ev) => {
    ev.preventDefault();
    // gera uma senha nova assim que a pagina carregar
    loginController.gerarSenha();
    // BOTÃO GERAR SENHA --------------------------------
    // cria o evento de gerar nova senha ao clicar no botão
    const gerarSenhaBotao = document.querySelector("button#gerarSenha");
    if (gerarSenhaBotao) {
        gerarSenhaBotao.addEventListener('click', (ev) => {
            ev.preventDefault();
            loginController.gerarSenha();
        });
    }
    ;
    // LOGIN --------------------------------------------------
    // evento de incluir a nova senha ao enviar o formulário
    const formIncluir = document.querySelector("form#formSenhas");
    if (formIncluir) {
        formIncluir.addEventListener('submit', (ev) => {
            ev.preventDefault();
            loginController.adicionar();
        });
    }
    ;
};
