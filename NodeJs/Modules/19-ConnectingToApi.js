console.clear();
const http = require('http');

http.createServer((req, res) => {
   switch(req.method){
      case "GET":
         handleGetMethod(req, res);
      break;
      default:
         res.end("Unsuported method")
   }
})
.listen(8080)

function handleGetMethod(req, res){

   const options = {
      hostname: "fakestoreapi.com",
      path: "/products",
      method: "GET",
      headers: {"Content-Type": "application/json"}
   }

   const reqToApi = http.request(options, (response)=>{
      console.log(response.statusCode)

      let data = ''
      response.on("data", chunck => data += chunck);

      response.on("end", () => {
         res.end(data)
      })
   })

   reqToApi.end()
}