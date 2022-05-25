export function domInjector(selector) {
    return function (target, key) {
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
                console.log(`definida o valor ${element} para ${key}`);
            }
            return element;
        };
        Object.defineProperty(target, key, { get: getter });
    };
}
//# sourceMappingURL=dom-inject.js.map