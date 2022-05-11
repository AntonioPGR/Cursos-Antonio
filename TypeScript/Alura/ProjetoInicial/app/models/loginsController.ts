import { logarTempoDeExecucao } from "../decorators/tempo-de-execucao.js";
import { LoginsView } from "../views/logins-view.js";
import { MensagensViews } from "../views/mensagens-view.js";
import { Login } from "./login.js";
import { Logins } from "./logins.js";
import { Senha } from "./senha.js";

// faz o controle da criação de logins, verificando e aprovando ou resusando-o 
export class LoginsController{

  private _inputWebsite : HTMLInputElement;
  private _inputUsuario : HTMLInputElement;
  private _inputCodigoDeRecuperacao : HTMLInputElement;
  private _inputSenha : HTMLInputElement;
  private logins : Logins;
  private loginsView : LoginsView;
  private msgsView : MensagensViews;

  constructor(){

    const inputWebsite : HTMLInputElement | null = document.querySelector("input#website");
    const inputUser : HTMLInputElement | null = document.querySelector("input#usuario");
    const inputCdr : HTMLInputElement | null = document.querySelector("input#crd");
    const inputPassword : HTMLInputElement | null = document.querySelector("input#senha");

    if(inputWebsite && inputUser && inputCdr && inputPassword){

      this._inputWebsite = inputWebsite;
      this._inputUsuario = inputUser;
      this._inputCodigoDeRecuperacao = inputCdr;
      this._inputSenha = inputPassword;
      this.logins = new Logins();

      const loginsViewRenderLocal = document.querySelector("#senhasView") as HTMLInputElement
      this.loginsView = new LoginsView(loginsViewRenderLocal);
      this.loginsView.update(this.logins)

      const msgsViewRenderLocal = document.querySelector("#mensagemView") as HTMLInputElement
      this.msgsView = new MensagensViews(msgsViewRenderLocal)

      this.gerarSenha();  

    } else {

      throw new Error("Can't create the controller, input haven't been created yet")

    }       

  }

  /**
   * Adiciona o login atual do formulário ao banco de dados
   */
  @logarTempoDeExecucao()
  public adicionar():void{

    // checa se os parâmetros são validos para a efetuação da adição
    if(!this.checkInformacoesEstaoCorretas()){
      return
    }

    // cria um novo login e adiciona ao array de logins
    const loginInfo = this.informacoesDeLogin;
    const login = new Login(loginInfo.usuario, loginInfo.senha,loginInfo.website, loginInfo.codigoDeRecuperacao);
    this.logins.adiciona(login);

    // limpa o formulário de login
    this.limparFormulario()

    // atualiza os elementos dinâmicos da página
    this.atualizaViews()

    this.limparFormulario()
    
  }

  /*
   * Atualiza as views da pagina
  */
  private atualizaViews() : void{

    this.loginsView.update(this.logins)
    this.msgsView.update("Seu login foi realizado com sucesso!");

  }

  /**
   * Checa se as informações passadas são validas
   */
  private checkInformacoesEstaoCorretas():boolean{
    return true;
  }

  /**
   * Limpa os dados do formulário
   */
  private limparFormulario():void{

    if(this.inputCodigoDeRecuperacao && this.inputSenha && this.inputUsuario && this.inputWebsite){

      this.inputCodigoDeRecuperacao.value = '';
      this.inputSenha.value = '';
      this.inputUsuario.value = '';
      this.inputWebsite.value = '';
      this.inputWebsite.focus();
      this.gerarSenha()

    }

  }

  /**
   * constroi uma nova senha e insere no formulário
   */
  public gerarSenha() : void{

    // Configurações para a senha gerada
    const senhaConfig = {
      charactMin: "abcdefghijklmnopqrstuvwxyz",
      charactMaisc: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numeros: "123456789",
      simbolos: "+-[]{}/?!@#$%&*"
    }
    const gerador = new Senha(senhaConfig, this.inputSenha)
    gerador.gerarSenha();

  }

  // GETTERS ----------
  get informacoesDeLogin(){
    return {
      website: this.inputWebsite.value,
      usuario: this.inputUsuario.value,
      senha: this.inputSenha.value,
      codigoDeRecuperacao: this.inputCodigoDeRecuperacao.value
    }
  }
  get inputWebsite():HTMLInputElement{
    return this._inputWebsite;
  }
  get inputUsuario():HTMLInputElement{
    return this._inputUsuario
  }
  get inputSenha():HTMLInputElement{
    return this._inputSenha;
  }
  get inputCodigoDeRecuperacao():HTMLInputElement{
    return this._inputCodigoDeRecuperacao
  }

}
