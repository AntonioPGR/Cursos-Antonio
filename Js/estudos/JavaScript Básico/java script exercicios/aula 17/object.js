let amigo = {nome:'josé' ,
sexo:'M',
peso:77,
engordar(p = 0){
    this.peso += p
}}
amigo.engordar(3)
console.log( `${amigo.nome} pesa ${amigo.peso}` )