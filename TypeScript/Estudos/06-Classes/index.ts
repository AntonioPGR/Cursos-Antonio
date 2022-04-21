console.clear();

class Car{

  // propriedades com _ antes do nomme tem obrigatóriamente que ter um valor pre setado
  _marca: string;
  _name: string = '';
  _potencia: number = 0;
  _direcaoEletrica: boolean = false;

  constructor( marca:string, name:string, potencia:number, direcaoEletrica:boolean ){

    this.marca = this.marca? this.marca : marca;
    this.name = this.name? this.name : name;
    this.potencia = this.potencia? this.potencia : potencia;
    this.direcaoEletrica = this.direcaoEletrica? this.direcaoEletrica : direcaoEletrica;

  } 

  makeAnnoucement(){
    const f1 = `Hoje apresentaremos o novo ${this.name} da ${this.marca}, `;
    const f2 = `contendo ${this.potencia}cv de potência, `;
    const f3 = this.direcaoEletrica? `direção elétrica, ` : '';
    const f4 = `essa carro irá te surpreender`

    const finalFrase = f1 + f2 + f3 + f4

    console.log(finalFrase)
  }

  // como não tem uma set function, o parâmetro é readonly automaticamente
  get name() : string {
    return this._name
  }
  set name(new_value:string){
    this._name = new_value;
  }

  get marca() : string {
    return this._marca
  }
  set marca(new_value:string){
    this._marca = new_value;
  }

  get potencia() : number {
    return this._potencia
  }
  set potencia(new_value:number){
    this._potencia = new_value;
  }

  get direcaoEletrica() : boolean {
    return this._direcaoEletrica
  }
  set direcaoEletrica(new_value:boolean){
    this._direcaoEletrica = new_value;
  }

}

// always a class extends another, we have to call the super property
class Palio extends Car{

  constructor(potencia:number, direcaoEletrica:boolean){

    super('Fiat', 'Palio', potencia, direcaoEletrica)

  }
}

const uno = new Car('fiat', 'uno', 65, true);
// uno.marca = 'volks', não funcionará porque marca é uma readonly propiedade
uno.makeAnnoucement()