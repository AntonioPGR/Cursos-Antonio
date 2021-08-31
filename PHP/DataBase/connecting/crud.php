<?php
$nome = $_POST['name'];
$sobrenome = $_POST['last_name'];
$cell = $_POST['cel'];

$servername = 'localhost';
$server_user = 'root';
$sevrer_password = '';

try{
    // connecting to database
    $conn = new PDO("mysql:host=$servername;dbname=db_test", $server_user, $sevrer_password);
    $conn->setAttribute(PDO::ATTR_ERRMODE ,PDO::ERRMODE_EXCEPTION);
    echo 'Sucefully database conected <br>';

    // creating sql query to insert the data into database
    $sql_qr = 
    "INSERT INTO users (name, last_name, cellphone)
    VALUES ('$nome', '$sobrenome', '$cell')";
    $conn->exec($sql_qr);
    echo 'Sucefully insert data <br>';

} catch(PDOException $e){
    echo "ERROR: $e";
}
