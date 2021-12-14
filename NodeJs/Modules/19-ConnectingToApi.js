console.clear();
const http = require('http');

// criando servivdor http
http.createServer((req, res) => {
   // separando os req por metodo
   switch(req.method){
      case "GET":
         handleGetMethod(req, res);
      break;
      default:
         res.end("Unsuported method")
   }
})
.listen(8080)

// função que cuida dos request feito a partir do método get
function handleGetMethod(req, res){

   // opções de request
   const options = {
      hostname: "fakestoreapi.com",
      path: "/products",
      method: "GET",
      headers: {"Content-Type": "application/json"}
   }

   // criando um req para a api de produtos
   const reqToApi = http.request(options, (response)=>{
      console.log(response.statusCode)

      let data = ''
      response.on("data", chunck => data += chunck);

      response.on("end", () => {
         res.end(data)
      })
   })

   // encerrando request
   reqToApi.end()
}