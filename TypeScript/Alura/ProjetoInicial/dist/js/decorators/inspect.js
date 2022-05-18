export function inspecionarMetodo() {
    return ((target, propertyKey, descriptor) => {
        const OriginalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log("--------");
            console.log(`Método: ${propertyKey}`);
            console.log(`parâmetros: ${JSON.stringify(args)}`);
            const r1 = OriginalMethod.apply(this, args);
            console.log(`-retorno: ${r1}`);
            console.log("--------");
            return r1;
        };
        return descriptor;
    });
}
