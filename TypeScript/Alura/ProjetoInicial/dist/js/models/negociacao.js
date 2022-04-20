export class Negociacao {

  // guarda a data que ocorreu a negociação
  #data;
  // guarda a quantidade de ações vendidas na negocicação
  #quantidade;
  // guarda o valor de cada ação
  #valor;

  // atribui os valores aos objetos da classe
  constructor(data, quantidade, valor){

    this.#data = data;
    this.#quantidade = quantidade;
    this.#valor = valor;

  }

  // GETTERS ----------------------------------- 
  get data(){
    return this.#data;
  }
  get quantidade(){
    return this.#quantidade;
  }
  get valor(){
    return this.#valor
  }
  get volume(){
    return this.valor * this.quantidade;
  }

}

