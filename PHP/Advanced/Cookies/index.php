<?php
    $name_cookie = 'nomeUser';
    $valueofcookie = isset($_POST['nome'])? $_POST['nome']: '';
    if ($valueofcookie != ''){
        setcookie($name_cookie, $valueofcookie, time() + (86400 * 30), "/"); // nome do cookie, valor, tempo que o cookie irá durar ( 30 dias ), /
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        if(isset($_COOKIE[$name_cookie])){
            echo 'The atual value of '.$name_cookie.' is '.$valueofcookie;
        }
    ?>

    <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"])?>" method="post">
        nome: <input type="text" name="nome">
        <button type="submit">
            <?php 
            if(isset($_COOKIE[$name_cookie])){
                echo 'Alterar Cookie';
            } else {
                echo 'Criar Cookie';
            }
            ?>
        </button>
    </form>
</body>
</html>