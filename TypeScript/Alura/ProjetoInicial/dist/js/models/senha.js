export class Senha {
    constructor(senhaConfig, _inputSenha) {
        this._inputSenha = _inputSenha;
        this._characteresMaisc = senhaConfig.charactMaisc.split("");
        this._characteresMin = senhaConfig.charactMin.split("");
        this._numeros = senhaConfig.numeros.split("");
        this._simbolos = senhaConfig.simbolos.split("");
    }
    /**
     * Gera uma senha aleatória para o usuário
     */
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
        this.inserirSenha(novaSenha);
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
    /**
     * insere a senha passada no input da classe
     * @param senha senha a ser inserida no input
     */
    inserirSenha(senha) {
        this._inputSenha.value = senha;
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
    get inputSenha() {
        return this._inputSenha;
    }
}
