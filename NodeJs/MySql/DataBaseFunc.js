console.clear()

// função que cria a conecção com banco e retorna ela
async function connectDB(){
   if(global.connection && global.connection.state !== 'disconnected'){
      return global.connection
   }

   const mysql = require('mysql2/promise');
   const connection = await mysql.createConnection({
      user: "root",
      password: "050406DataBase",
      host: "localhost",
      port: 3306,
      database: "testes"
   });
   console.log("Connected to DataBase")
   global.connection = connection;
   return connection;
}

async function selectFromDB(){
   const conn = await connectDB();

   const response = await conn.query("SELECT * FROM users")
   return response[0]
}

async function insertIntoDB(user){
   const conn = await connectDB();

   const querySQL = "INSERT INTO users (nome, idade, sexo) VALUES (?, ?, ?)";
   const values = [user.nome, user.idade, user.sexo]
   const response = await conn.query(querySQL, values)

   return response;
}

async function updateIntoDB(id, user){
   const conn = await connectDB();

   const querySQL = "UPDATE users SET nome = ?, idade = ?, sexo = ? WHERE id = ?";
   const values = [user.nome, user.idade, user.sexo, id];
   const response = await conn.query(querySQL, values);

   return response;
}

async function deleteInDB(id){
   const conn = await connectDB();

   const querySQL = "DELETE FROM users WHERE id = ?";
   const values = [id];
   const response = await conn.query(querySQL, values);

   return response;
}

module.exports = {selectFromDB, insertIntoDB, updateIntoDB, deleteInDB};