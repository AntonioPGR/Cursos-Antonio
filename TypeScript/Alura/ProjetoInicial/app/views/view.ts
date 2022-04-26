export abstract class View <T>{

  protected localRenderizacao : HTMLElement

  constructor(localRenderizacao : HTMLElement){

    this.localRenderizacao = localRenderizacao;

  }

  /*
    * Atualiza o template atual da tela 
  */
  public update(model : T){

    this.localRenderizacao.innerHTML = ""
    const template = this.template(model)
    this.localRenderizacao.innerHTML = template;

  }

  protected abstract template(model: T) : string

}