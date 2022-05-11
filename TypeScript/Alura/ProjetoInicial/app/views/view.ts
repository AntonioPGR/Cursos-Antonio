import { logarTempoDeExecucao } from "../decorators/tempo-de-execucao.js";

export abstract class View <T>{

  protected escapar : boolean = false;

  constructor(
    protected localRenderizacao : HTMLElement,
    escapar ?: boolean
  ){

    if(escapar){
      this.escapar = escapar
    }

  }

  /*
    * Atualiza o template atual da tela 
  */
 @logarTempoDeExecucao()
  public update(model : T){

    this.localRenderizacao.innerHTML = ""
    let template = this.template(model)

    if(this.escapar){
      template = template.replace(/<script>[\s\S]*?<\/script>/, '')
    }
    
    this.localRenderizacao.innerHTML = template;

  }

  protected abstract template(model: T) : string

}