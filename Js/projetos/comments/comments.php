<?php

if(isset($_POST['action']) && !empty($_POST['action'])){
    switch($_POST['action']){
        case 'create': create_comment(); 
        break;
        case 'select': get_comments();
        break;
    }
} else {
    echo '';
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
    $comments = array();

    $pdo = new PDO("mysql:host=localhost;dbname=comments", 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $qr_sql = $pdo->prepare("SELECT name, comment FROM comments");
    $qr_sql->execute();
    $results = $qr_sql->fetchAll();

    if(count($results) === 0){
        echo 0;
    }else{
        $c=0;
        foreach($results as $result){
            $comments["comment$c"] = array(
                'nome' => $result['name'],
                'comentario' => $result['comment'],
            );
            $c++;
        }
        echo json_encode($comments);
    }
}

get_comments();