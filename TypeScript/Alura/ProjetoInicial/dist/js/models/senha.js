export class Senha {
    constructor(senhaConfig, _inputSenha) {
        this._inputSenha = _inputSenha;
        this._characteresMaisc = senhaConfig.charactMaisc.split("");
        this._characteresMin = senhaConfig.charactMin.split("");
        this._numeros = senhaConfig.numeros.split("");
        this._simbolos = senhaConfig.simbolos.split("");
    }
    gerarSenha() {
        let novaSenha = "";
        for (let i = 0; i <= 10; i++) {
            const opcao = Math.floor(Math.random() * 11);
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
    characterAleatorio(opcoes) {
        const max = opcoes.length;
        const caract = opcoes[Math.floor(Math.random() * max)];
        return caract;
    }
    inserirSenha(senha) {
        this._inputSenha.value = senha;
    }
}
//# sourceMappingURL=senha.js.map