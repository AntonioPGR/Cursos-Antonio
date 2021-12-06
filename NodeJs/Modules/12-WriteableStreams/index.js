console.clear();

// importação dos métodos
const readline = require("readline");
const fs = require("fs");

const interface = readline.Interface({
   input: fs.createReadStream('./toDoList.txt')
})

// crio a stream que a qual irá ser escrita os dados
const writeableStream = fs.createWriteStream('./whatIHaveToDo.txt');

const writeOnStream = data => writeableStream.write(`${data}\n`);

interface.on('line', writeOnStream);