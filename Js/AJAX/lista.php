<?php

$respost = $_POST['chose']

if ($respost == 1){
    $users = [
        "Antonio",
        "Mario",
        "Leo",
        "Luiza",
        "Marcos",
        "Maria",
        "José",
    ];
    echo json_encode($users);
} else {
    echo 'nenhum'
}

?>