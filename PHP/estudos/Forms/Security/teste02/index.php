<?php 
include_once 'php/data-validation.php' ;

// verifica se há requests pelo metodo post para chamar a função de adicionar pessoas
if (count($_POST) != 0){
    valid_comment();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de pessoas</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <main>
        <h1>Cadastro de pessoas</h1>

        <!-- formulario onde ocorrerá o cadastro da pessoa -->
        <!-- o código php serve para exibição das mensagens de erro -->
        <form action="index.php" method="POST">
            <?php echo  $errorMessage==''? '':"<span class='required'>*${errorMessage}</span>" ?>

            <p>
                <label for="fname">Nome:</label> 
                <input type="text" name="first_name" id="fname"> 
                <span class="required">*<?php echo $fnameErr?></span>
            </p>
            <p>
                <label for="sname">Sobrenome:</label> 
                <input type="text" name="second_name" id="sname"> 
                <?php echo $snameErr==''? $snameErr : '<span class="required">*', $snameErr, '</span>'; ?>
                <!-- se tiver erro cria o span e exibe, se não não exibe nada -->
            </p> 
            <p>
                <label for="email">Email:</label> 
                <input type="email" name="email" id="email"> 
                <span class="required">*<?php echo $emailErr?></span>
            </p>
            <p>
                <label for="comment">Comentário:</label> 
                <input type="text" name="comment" id="comment"> 
                <span class="required">*<?php echo $commentErr?></span>
            </p>

            <button type="submit">Adicionar</button>
        </form>
    
        <section>
            <?php
                // exibir comentarios guardados na variavel de comentarios
                if(count($allComments) == 0){
                    echo '<p>Não temos nenhum comentario registrado ainda, seja o primeiro!</p>';
                } else {
                    foreach ($allComments as $cm){
                        echo '<div>';
                        echo '<p class="name">', $cm[0], ' ', $cm[1] ,'</p>';
                        echo '<p class="comment">', $cm[3], '</p>';
                        echo '</div>';
                    }
                }
            ?>
        </section>
    </main> 
</body>
</html>