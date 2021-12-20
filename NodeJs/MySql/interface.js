console.clear()

const db = require('./DataBaseFunc')
const http = require('http')
const url = require('url')

http.createServer((req, res) => {
   const method = req.method
   console.log(method)
   switch (method) {
      case 'GET':
         handleGetMethod(req, res);
      case 'POST':
         handlePostMethod(req, res);
      case 'PUT':
         handlePutMethod(req, res);
      case 'DELETE':
         handleDeleteMethod(req, res);
      default:
         console.log("Unsuported method")
   }
})
.listen(8080);

// cuida dos requests através do metodo get
async function handleGetMethod(req, res) {
   // recebe a lista de usuários e retorna-a
   const response = await getUsers();
   res.writeHeader(200, {"Content-Type": "application/json"})
   res.end(JSON.stringify(response))
}


async function handlePostMethod(req, res) {
   var body = "";
   req.on("data", function (chunk) {
      body += chunk;
   });

   req.on("end", async () => {
      res.writeHead(200);
      const user_data = JSON.parse(body);
      await createUser(user_data);
      res.end("user create sucefully")
   });
}


function handlePutMethod(req, res) {

}


function handleDeleteMethod(req, res) {

}

// função com finalidade de retornar o objeto da promisse de seleção dos usuarios cadastrados no banco
async function getUsers(){
   const users = await db.selectFromDB();
   return users
}

async function updateUsers(id, updatedUser){
   db.updateIntoDB(id, updatedUser);
}

async function deleteUser(id){
   db.deleteInDB(id)
}

async function createUser(userInfo){
   db.insertIntoDB(userInfo)
}