console.clear();

const http = require('http');
const fs = require('fs');

const handleGetMethod = (req, res) => {
   const url = req.url
   if(url === '/users'){
      const query = url.split('?')[1]
      if(!query){
         getDataBaseData((err, data) => {
            if(err){
               console.error(err);
            } else {
               res.statusCode = 200
               res.setHeader('Content-Type', 'application/json')
               res.end(data);
            }
         });
      }
   } else { 
      res.end("<a href='/users'>Users</a>");
   }
}

const handleUnsuportedMethod = (req, res) => {
   res.end("unsuported method: " + req.method);
}

const getDataBaseData = (cb) =>{
   fs.readFile("./db_users.json", 'utf-8', cb)
}

http.createServer((req, res) => {
   const method = req.method;

   switch(method){
      case 'GET':
         handleGetMethod(req, res);
      break;
      default:
         handleUnsuportedMethod(req, res);
      break;
   }
})
.listen(8080)
