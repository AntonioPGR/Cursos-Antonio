<?php 

// função que validará os itens do formulário
function iten_validation($iten){
    $iten = htmlspecialchars($iten); // transforma simbolos em notação html
    return $iten;
}

// função que adicionará o registro de uma pessoa ao array
function add_people(){
    $first_name = iten_validation($_POST['first_name']);
    $second_name = iten_validation($_POST['second_name']);
    $email = iten_validation($_POST['email']);
    $comment = iten_validation($_POST['comment']);

    // validação da variavel firstname
    if (empty($first_name)){ // verifica se está vazio
        echo 'O campo de primeiro nome não pode ficar vazio';
    } elseif (!ctype_alpha($first_name)){ // verifica de são apenas letras
        echo 'O campo de nome deve conter apenas letras';
    } else {
        echo 'tudo ok';
    }
}