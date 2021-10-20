const array1 = [1, 2, 3, 4, 5, 6]


// com recuce, ele retorna um valor apenas baseado em um array, por exemplo, a soma dos valores desse array
const reducer = (acumulador, valorAtual) => acumulador += valorAtual
console.log(array1.reduce(reducer))

// já o map retorna um array com algo executado em cada um de seus valores, por exemplo, somar dois a cada um dos itens de um array
const maper = (valorAtual) => valorAtual + 2
console.log(array1.map(maper))

// O filter literalmente filtra um valor baseado em uma condição, e com ele, podemos por exemplo ver quais itens do array são maiores que 5
const filt = (value) => value >= 5
console.log(array1.filter(filt))