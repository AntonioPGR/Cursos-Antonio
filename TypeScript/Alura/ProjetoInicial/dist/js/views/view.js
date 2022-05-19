export class View {
    constructor(localRenderizacao) {
        this.localRenderizacao = localRenderizacao;
    }
    update(model) {
        this.localRenderizacao.innerHTML = "";
        let template = this.template(model);
        this.localRenderizacao.innerHTML = template;
    }
}
