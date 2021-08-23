var n = [3, 5, 6, 8, 1]

n.push(4) // adiciona numero no final
n.sort() //coloca em ordem crescente
console.log(n)
console.log(`o arrey tem ${n.length} casas`)
console.log(`o primeiro valor do array é ${n[0]}`)
console.log(`o valor 8 esta na posição ${n.indexOf(8)}`)// busca numero dentro do array
var nove = n.indexOf(9)// caso não tenha o numero o rsultado é -1
if (nove = -1){
    console.log('o numero 9 não encontrasse no array')
}

