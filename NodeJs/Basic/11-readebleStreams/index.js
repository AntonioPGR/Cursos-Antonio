// lendo um texto linha por linha, apesar de poder demandar um tempo maior, o seu uso de memória ram e do sistema reduz, então para casos de arquivos muito grandes é uma das melhores saidas

console.clear();

// importação dos métodos 
const readline = require("readline");
const fs = require("fs");

// crio uma interface que recebe como input o Stream do arquivo que é de desejo a lida
const interface = readline.Interface({
   input: fs.createReadStream('./toDoList.txt')
})

const logData = data => console.log(data);

// a cada linha lida a função de printar a linha é chamada
interface.on('line', logData);