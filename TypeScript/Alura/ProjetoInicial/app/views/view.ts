import { escapeScript } from "../decorators/escape-script.js";
import { inspecionarMetodo } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/tempo-de-execucao.js";

export abstract class View <T>{

  constructor(
    protected localRenderizacao : HTMLElement,
  ){}

  /*
    * Atualiza o template atual da tela 
  */
//  @logarTempoDeExecucao()
//  @inspecionarMetodo
  public update(model : T):void{

    this.localRenderizacao.innerHTML = ""
    let template = this.template(model)
    
    this.localRenderizacao.innerHTML = template;

  }

  protected abstract template(model: T) : string

}