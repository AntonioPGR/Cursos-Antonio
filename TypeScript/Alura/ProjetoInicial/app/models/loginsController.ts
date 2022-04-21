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

      this.gerarSenha();  

    } else {

      throw new Error("Can't create the controller, input haven't been created yet")

    }        

  }

  /**
   * Adiciona o login atual do formulário ao banco de dados
   */
  public adicionar():void{

    // checa se os parâmetros são validos para a efetuação da adição
    if(!this.informacoesEstaoCorretas()){
      return
    }

    const loginInfo = this.informacoesDeLogin;

    const login = new Login(loginInfo.usuario, loginInfo.senha,loginInfo.website, loginInfo.codigoDeRecuperacao);
    login.dataDeCriacao.setDate(12)
    this.logins.adiciona(login);
    console.log(this.logins.lista())
  }

  /**
   * Checa se as informações passadas são validas
   */
  public informacoesEstaoCorretas():boolean{
    return true;
  }

  /**
   * Limpa os dados do formulário
   */
  public limparFormulario():void{

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

  // SETTERS ----------

}
