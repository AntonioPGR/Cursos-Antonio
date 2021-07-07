// o comando Object.assign pode ser usado para copiar objetos, juntar objetos criando apenas um,  
const people1 = {eye: 'blue',
                hair:'blonde',
                color:'white',}

const people2 = {eye: 'blue',
                hair:'brown',
                color:'white',
                height: 1.70,}

let people = Object.assign(people2, people1)
let people1_copy = Object.assign({}, people1)

console.log(people)
console.log(people1_copy)


const array1 = [1, 2, 3]
let array2 = array1.concat(4)
console.log(array1, array2)