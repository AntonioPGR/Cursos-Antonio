export function obterLoginsGravados() {
    const apiUrl = "http://localhost:8080/dados";
    return fetch(apiUrl)
        .then((res) => res.json());
}
