let leite = {preço: 4,
dinheiro: 20,
troco: 0,
comprar(p = 0){
    leite.troco = p*this.preço
}}
amigo.comprar(3)
console.log( `${leite.troco}` )