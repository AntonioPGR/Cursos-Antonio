export class View {
    constructor(localRenderizacao) {
        this.localRenderizacao = localRenderizacao;
    }
    /*
      * Atualiza o template atual da tela
    */
    update(model) {
        this.localRenderizacao.innerHTML = "";
        const template = this.template(model);
        this.localRenderizacao.innerHTML = template;
    }
}
