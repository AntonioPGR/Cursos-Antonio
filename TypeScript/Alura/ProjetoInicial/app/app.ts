import { LoginsController } from "./models/loginsController.js";

// cria a classe controladora do formulário
const loginController = new LoginsController();

// AO CARREGAR O DOCUMENTO -------------------------------------------------

window.onload = (ev) => {

  ev.preventDefault()

  console.log('load')

  // gera uma senha nova assim que a pagina carregar
  loginController.gerarSenha();

  // BOTÃO GERAR SENHA --------------------------------
  // cria o evento de gerar nova senha ao clicar no botão
  const gerarSenhaBotao : HTMLButtonElement | null = document.querySelector("button#gerarSenha");
  if(gerarSenhaBotao){
    gerarSenhaBotao.addEventListener('click', (ev) => {
  
      ev.preventDefault()
  
      loginController.gerarSenha()
  
    })
  };
  
  // LOGIN --------------------------------------------------
  // evento de incluir a nova senha ao enviar o formulário
  const formIncluir : HTMLFormElement | null = document.querySelector("form#formSenhas");
  if(formIncluir){
    formIncluir.addEventListener('submit', (ev) : void =>{
    
      ev.preventDefault()
    
      loginController.adicionar()
    
      loginController.limparFormulario()
    
    })
  };

}
