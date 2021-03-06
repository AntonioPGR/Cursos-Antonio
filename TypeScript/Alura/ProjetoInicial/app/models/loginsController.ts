import { domInjector } from "../decorators/dom-inject.js";
import { inspecionarMetodo } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/tempo-de-execucao.js";
import { LoginServices } from "../services/obterLoginsGravados.js";
import { imprimir } from "../utils/imprimir.js";
import { LoginsView } from "../views/logins-view.js";
import { MensagensViews } from "../views/mensagens-view.js";
import { Login } from "./login.js";
import { Logins } from "./logins.js";
import { Senha } from "./senha.js";

// faz o controle da criação de logins, verificando e aprovando ou resusando-o 
export class LoginsController{

  @domInjector("input#website")
  private _inputWebsite : HTMLInputElement;
  @domInjector("input#usuario")
  private _inputUsuario : HTMLInputElement;
  @domInjector("input#crd")
  private _inputCodigoDeRecuperacao : HTMLInputElement;
  @domInjector("input#senha")
  private _inputSenha : HTMLInputElement;
  
  private logins : Logins;
  private loginsView : LoginsView;
  private msgsView : MensagensViews;

  constructor(){
    this.logins = new Logins();

    const loginsViewRenderLocal = document.querySelector("#senhasView") as HTMLInputElement
    this.loginsView = new LoginsView(loginsViewRenderLocal);
    this.loginsView.update(this.logins)

    const msgsViewRenderLocal = document.querySelector("#mensagemView") as HTMLInputElement
    this.msgsView = new MensagensViews(msgsViewRenderLocal)

    this.gerarSenha();   

  }

  /**
   * Adiciona o login atual do formulário ao banco de dados
   */
  public adicionar():void{

    // checa se os parâmetros são validos para a efetuação da adição
    if(!this.checkInformacoesEstaoCorretas()){
      return
    }

    // cria um novo login e adiciona ao array de logins
    const loginInfo = this.informacoesDeLogin;
    const login = new Login(loginInfo.usuario, loginInfo.senha, loginInfo.website, loginInfo.codigoDeRecuperacao);
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
  private atualizaViews(sendMSG=true) : void{

    this.loginsView.update(this.logins)
    if(sendMSG){this.msgsView.update("Seu login foi realizado com sucesso!");}

  }

  /*
   *Busca informações da API
  */
  public async buscarInformacoes(){
    
    try{
      this.msgsView.update("Buscando por logins já registrados!")

      const logins = await LoginServices.obterLoginsGravados()

      if(logins.length === 0){
        this.msgsView.update('Não foi possivel encontrar nenhum login cadastrado!')
        return
      }

      logins.map((novoLogin)=>{

        let ehIgual = false;
        this.logins.lista().map((loginJaRegistrado)=>{

          if(novoLogin.ehIgual(loginJaRegistrado)){
            ehIgual = true
            console.log(`${novoLogin} == ${loginJaRegistrado}`)
          }

        })

        if(!ehIgual){
          this.logins.adiciona(novoLogin);
        }

      })

      imprimir(...logins)

      this.msgsView.update('Logins importados com sucesso!')

      this.atualizaViews(false) 

    } catch {

      this.msgsView.update("Não foi possivel encontrar nenhum login!")

    }

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
