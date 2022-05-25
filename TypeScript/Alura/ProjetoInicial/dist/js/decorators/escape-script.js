export function escapeScript() {
    return (target, key, descriptor) => {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let response = metodoOriginal.apply(this, args);
            if (typeof response === "string") {
                response = response.replace(/<script>[\s\S]*?<\/script>/, '');
            }
            return response;
        };
        return descriptor;
    };
}
//# sourceMappingURL=escape-script.js.map