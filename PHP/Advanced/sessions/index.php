<?php 
    session_start();

    if (isset($_POST['name']) && isset($_POST['color'])){
        $_SESSION['nome'] = $_POST['name'];
        $_SESSION['color'] = $_POST['color'];
        header('Location:result.php');
    } else {
        echo 'Insira todas as informações corretamente';
    }
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Session test</title>
</head>
<body>
    <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"])?>" method='POST'>
        nome: <input type="text" name="name" id="name"> <br>
        favorite color: <input type="color" name="color" id="color"> <br>
        <button type="submit">Enviar</button>
    </form>
</body>
</html>