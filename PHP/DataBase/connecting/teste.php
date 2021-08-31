<?php 
$nome_servidor = 'localhost';
$nome_usuario = 'root';
$senha = '';

try{
    // conectando ao banco de dados
    $connect = new PDO("mysql:host=$nome_servidor;dbname=db_test", $nome_usuario, $senha);
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo 'database connected';

    // query sql
    $sql = "CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        cellphone INT(9)
    )";
    // executando a query sql
    $connect->exec($sql);
    echo 'table created';

}catch(PDOException $e){
    echo "Conection error:". $e->getMessage();
}