console.clear();

const http = require('http');

const server = http.createServer((req, res)=>{
   switch(req.method){
      case 'GET': 
         handleGetMethod(req, res);
      break;
      default:
         throw new Error(`Unsuported method! method: ${req.method}`);
         res.statusCode = 404
   }
})

const handleGetMethod = (req, res) =>{
   const path = req.url;

   if(path === '/news'){
      res.end(JSON.stringify(["meteoro cai e mata geral", "novo jogo de meteoro é lançado"]))
   } else {
      res.end(JSON.stringify("Não foi possivel achar uma página nesse url"))
   }
}

server.listen(8080, ()=>{
   const { port } = server.address()

   console.log(`Servidor ativo na porta ${port}`);
});