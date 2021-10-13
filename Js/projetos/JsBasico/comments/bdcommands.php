<?php

$pdo = new PDO('mysql:host=localhost', 'root', '');
$pdo->setAttribute(PDO::ATTR_ERRMODE ,PDO::ERRMODE_EXCEPTION);

$qr_sql = "USE comments";
$pdo->exec($qr_sql);

$qr_sql = "CREATE TABLE comments(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    comment TEXT NOT NULL,
    PRIMARY KEY(id)
    )";

$pdo->exec($qr_sql);