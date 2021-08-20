<?php 
$fnameErr = $snameErr = $emailErr = $commentErr = $errorMessage = ''; // mensagem de erro de cada respectivo campo
$hasErr = false; // variavel de controle para saber se ocorreu algum erro na digitação dos campos
$allComments = array(
    array('Jose', 'do reis', 'josedosreis@gmail.com', 'muito pika'),
    array('Maria', 'ana', 'maria_ana@gmail.com', 'brabo d+'),
    array('Isa', '', 'isagomes@gmail.com', 'gostei'),
); // array que salvará os comentarios ( temporario pois ainda não aprendi banco de dados com php )

// função que validará os itens do formulário
function iten_validation($iten){
    $iten = trim($iten); // retira caracteres desnecessários
    $iten = stripslashes($iten); // deleta as contrabarras
    $iten = htmlspecialchars($iten); // transforma simbolos em notação html
    return $iten;
}

// função que adicionará o registro de uma pessoa ao array
function valid_comment(){
    // variaveis globais de erro
    global $fnameErr, $snameErr, $emailErr, $commentErr, $hasErr, $errorMessage;

    // dados vindos do formulario
    $first_name = iten_validation($_POST['first_name']);
    $second_name = iten_validation($_POST['second_name']);
    $email = iten_validation($_POST['email']);
    $comment = iten_validation($_POST['comment']);

    // validação da variavel firstname
    if (empty($first_name)){ // verifica se está vazio
        $fnameErr = "O campo 'nome' não pode ficar vazio";
        $hasErr = true;
    } elseif (!ctype_alpha($first_name)){ // verifica de são apenas letras
        $fnameErr = "O campo 'nome' deve conter apenas letras";
        $hasErr = true;
    } 

    // validação do segundo nome
    if (!ctype_alpha($second_name)){
        if (!empty($second_name)){
            $snameErr = "O campo 'sobrenome' deve contar apenas letras";
            $hasErr = true;
        }
    }

    // validação de email
    if (empty($email)){
        $emailErr = "O campo 'email' não pode ficar vazio";
        $hasErr = true;
    }elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)){ // verifica se o email é válido
        $emailErr = 'email error';
        $hasErr = true;
    }

    // validação de comentario
    if (empty($comment)){
        $commentErr = "O campo 'comentario' não pode ficar vazio";
    }

    // retornar mensagem de erro ou salvar o comentario
    if ($hasErr){
        $errorMessage = 'Atenção, todos os campos devem ser preenchidos corretamente para o envio do formulário';
    } else {
        save_comment($first_name, $second_name, $email, $comment);
    }
}

// adiciona os comentarios no array de comentarios
function save_comment($fname, $sname, $email, $comment){
    global $allComments;
    
    $allComments[] = array($fname, $sname, $email, $comment);
}
