export class MensagensViews{

  constructor(
    private localRenderizacao : HTMLElement
  ){}
  
  public template(model : string) : string{

    return `
      <p class="alert alert-info"> ${model} </p>
    `

  }

  public update(model : string){

    const template = this.template(model)
    this.localRenderizacao.innerHTML = template;

  }

}