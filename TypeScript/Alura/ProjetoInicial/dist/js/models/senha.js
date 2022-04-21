export class GeradorSenha {
    constructor(charactMin, charactMaisc, numeros, simbolos) {
        this._characteresMaisc = charactMaisc.split("");
        this._characteresMin = charactMin.split("");
        this._numeros = numeros.split("");
        this._simbolos = simbolos.split("");
    }
    // Gera uma senha aleatória para o usuário
    gerarSenha() {
        let novaSenha = "";
        // escolhe aleatóriamente uma letra maiuscula, minuscula, numero ou simbolo;
        for (let i = 0; i <= 10; i++) {
            // numero aleatório ente 0 e 4. define o tipo do proximo caractere
            const opcao = Math.floor(Math.random() * 11);
            // define de qual array de opções será retirado o novo caractere
            let lettersArray;
            switch (opcao) {
                case 0 || 1:
                    lettersArray = this._simbolos;
                    break;
                case 2 || 3 || 4:
                    lettersArray = this._characteresMaisc;
                    break;
                case 5 || 6 || 7:
                    lettersArray = this._characteresMin;
                    break;
                case 8 || 9 || 10:
                    lettersArray = this._numeros;
                    break;
                default:
                    lettersArray = this._characteresMin;
            }
            const novoCharactere = this.characterAleatorio(lettersArray);
            novaSenha += novoCharactere;
        }
        return novaSenha;
    }
    /**
     * Gera um numero aleatório perante as opções passadas
     * @param opcoes array com as opçoes de escolha
     * @returns um caractere aleatório do array passado
     */
    characterAleatorio(opcoes) {
        const max = opcoes.length;
        const caract = opcoes[Math.floor(Math.random() * max)];
        return caract;
    }
    // GETTERS ----------
    get characteresMin() {
        return this._characteresMin;
    }
    get characteresMaisc() {
        return this._characteresMaisc;
    }
    get numero() {
        return this._numeros;
    }
    get simbolos() {
        return this._simbolos;
    }
}
