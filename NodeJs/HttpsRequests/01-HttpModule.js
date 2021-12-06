console.clear();

const http = require('http');

// cria um servidor http onde recebe uma função de dois parametros como callback
// req contem informações sobre o request ao servidor
// res contem informações sobre a resposta do servidor
const server = http.createServer((req, res) => {
   res.write("Hello world!");
   res.end(); 
}).listen(3030)