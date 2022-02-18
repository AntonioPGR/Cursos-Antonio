"use strict";
console.clear();
class Car {
    constructor(marca, name, potencia, direcaoEletrica) {
        // propriedades com _ antes do nomme tem obrigatóriamente que ter um valor pre setado
        this._name = '';
        this._potencia = 0;
        this._direcaoEletrica = false;
        this.marca = this.marca ? this.marca : marca;
        this.name = this.name ? this.name : name;
        this.potencia = this.potencia ? this.potencia : potencia;
        this.direcaoEletrica = this.direcaoEletrica ? this.direcaoEletrica : direcaoEletrica;
    }
    makeAnnoucement() {
        const f1 = `Hoje apresentaremos o novo ${this.name} da ${this.marca}, `;
        const f2 = `contendo ${this.potencia}cv de potência, `;
        const f3 = this.direcaoEletrica ? `direção elétrica, ` : '';
        const f4 = `essa carro irá te surpreender`;
        const finalFrase = f1 + f2 + f3 + f4;
        console.log(finalFrase);
    }
    // como não tem uma set function, o parâmetro é readonly automaticamente
    get name() {
        return this._name;
    }
    set name(new_value) {
        this._name = new_value;
    }
    get potencia() {
        return this._potencia;
    }
    set potencia(new_value) {
        this._potencia = new_value;
    }
    get direcaoEletrica() {
        return this._direcaoEletrica;
    }
    set direcaoEletrica(new_value) {
        this._direcaoEletrica = new_value;
    }
}
// always a class extends another, we have to call the super property
class Palio extends Car {
    constructor(potencia, direcaoEletrica) {
        super('Fiat', 'Palio', potencia, direcaoEletrica);
    }
}
const uno = new Car('fiat', 'uno', 65, true);
// uno.marca = 'volks', não funcionará porque marca é uma readonly propiedade
uno.makeAnnoucement();
