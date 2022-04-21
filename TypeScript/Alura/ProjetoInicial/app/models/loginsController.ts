import { Login } from "./login.js";
import { GeradorSenha } from "./senha.js";

// faz o controle da criação de logins, verificando e aprovando ou resusando-o 
export class LoginsController{

  private _inputWebsite : HTMLInputElement;
  private _inputUsuario : HTMLInputElement;
  private _inputCodigoDeRecuperacao : HTMLInputElement;
  private _inputSenha : HTMLInputElement;

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
    if(!this.informacoesCorretas()){
      return
    }

    const loginInfo = this.informacoesDeLogin;

    const login = new Login(loginInfo.usuario, loginInfo.senha,loginInfo.website, loginInfo.codigoDeRecuperacao);

    console.log(login)
    
  }

  /**
   * Checa se as informações passadas são validas
   */
  public informacoesCorretas():boolean{
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

    }

  }

  /**
   * constroi uma nova senha e insere no formulário
   */
  public gerarSenha() : void{

    const senha = this.construtorSenha()
    this.inserirSenha(senha)

  }

  /**
   * Gera uma nova senha aleatória
   * @returns senha gerada
   */
  public construtorSenha() : string{

    // Configurações para a senha gerada
    const senhaConfig = {
      charactMin: "abcdefghijklmnopqrstuvwxyz",
      charactMaisc: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numeros: "123456789",
      simbolos: "+-[]{}/?!@#$%&*"
    }
    const gerador = new GeradorSenha(senhaConfig.charactMin, senhaConfig.charactMaisc, senhaConfig.numeros, senhaConfig.simbolos)
    return gerador.gerarSenha()

  }

  /**
   * Insere a senha passada no input de senhas
   */
  public inserirSenha(senha:string) : void{

    if(this.inputSenha){
      this.inputSenha.value = senha;
    }

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
  get inputWebsite():HTMLInputElement | null{
    return this._inputWebsite;
  }
  get inputUsuario():HTMLInputElement | null{
    return this._inputUsuario
  }
  get inputSenha():HTMLInputElement | null{
    return this._inputSenha;
  }
  get inputCodigoDeRecuperacao():HTMLInputElement | null{
    return this._inputCodigoDeRecuperacao
  }

  // SETTERS ----------

}
