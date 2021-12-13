const mysql = require('mysql2/promise');

const conn = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root",
   password: "050406DataBase"
});
