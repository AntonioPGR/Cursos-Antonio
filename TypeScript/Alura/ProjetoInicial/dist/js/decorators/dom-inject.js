export function domInjector(selector) {
    return function (target, key) {
        const getter = function () {
            const element = document.querySelector(selector);
            console.log(`definida o valor ${element} para ${key}`);
            return element;
        };
        Object.defineProperty(target, key, { get: getter });
    };
}
