export function imprimir(...args) {
    args.map((model) => {
        if (model.paraTexto) {
            model.paraTexto();
        }
    });
}
