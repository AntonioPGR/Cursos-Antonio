export class View {
    constructor(localRenderizacao, escapar) {
        this.localRenderizacao = localRenderizacao;
        this.escapar = false;
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        this.localRenderizacao.innerHTML = "";
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.localRenderizacao.innerHTML = template;
    }
}
