<?php 
include_once 'php/data-validation.php' ;

// verifica se há requests pelo metodo post para chamar a função de adicionar pessoas
if (count($_POST) != 0){
    add_people();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de pessoas</title>
</head>
<body>
    <main>
        <!-- formulario onde ocorrerá o cadastro da pessoa -->
        <form action="index.php" method="POST">
            <h1>Cadastro de pessoas</h1>
            <p>Nome: <input type="text" name="first_name"> <span class="required">*</span></p>
            <p>Sobrenome: <input type="text" name="second_name"></p>
            <p>Email: <input type="email" name="email"> <span class="required">*</span></p>
            <p>Comentário: <input type="text" name="comment" id="comentario"> <span class="required">*</span></p>
            <button type="submit">Adicionar</button>
        </form>
    </main> 
</body>
</html>