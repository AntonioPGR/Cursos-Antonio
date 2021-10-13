<?php

if(isset($_POST['action']) && !empty($_POST['action'])){
    switch($_POST['action']){
        case 'create': create_comment(); 
        break;
        case 'select': get_comments();
        break;
        case 'delete': delete_comments();
        break;
    }
}

function create_comment(){
    $name = $_POST['name'];
    $comment = $_POST['comment'];

    $pdo = new PDO('mysql:host=localhost;dbname=comments', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE ,PDO::ERRMODE_EXCEPTION);
    
    $qr_sql = $pdo->prepare("INSERT INTO comments (name, comment) VALUES (:name, :comment)");
    $qr_sql->bindParam(":name", $name);
    $qr_sql->bindParam(":comment", $comment);
    $qr_sql->execute();
}

function get_comments(){
    // retira os comentarios do banco
    $pdo = new PDO("mysql:host=localhost;dbname=comments", 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $qr_sql = $pdo->prepare("SELECT id, name, comment FROM comments");
    $qr_sql->execute();
    $results = $qr_sql->fetchAll();

    // verifica se está vazio ou se há comentarios
    if(count($results) === 0){
        echo 0;
    }else{
        // adiciona os comentarios dentro de $comments
        $c=0;
        $comments = array();
        foreach($results as $result){
            $comentario = array(
                "id" => $result['id'],
                "nome" => $result['name'],
                "comentario" => $result['comment'],
            );
            array_push($comments, $comentario);
        }
        echo json_encode($comments);
    }
}

function delete_comments(){
    $comment_id = $_POST['id'];

    $pdo = new PDO('mysql:host=localhost;dbname=comments', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $qr_sql = $pdo->prepare("DELETE FROM comments WHERE id = '$comment_id'");
    $qr_sql->execute();
}

