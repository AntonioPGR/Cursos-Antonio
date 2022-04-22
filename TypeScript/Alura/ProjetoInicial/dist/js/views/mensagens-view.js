export class MensagensViews {
    constructor(localRenderizacao) {
        this.localRenderizacao = localRenderizacao;
    }
    template(model) {
        return `
      <p class="alert alert-info"> ${model} </p>
    `;
    }
    update(model) {
        const template = this.template(model);
        this.localRenderizacao.innerHTML = template;
    }
}
