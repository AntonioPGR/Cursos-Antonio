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
        $nome = isset($_POST['nome'])? $_POST['nome'] : 'baitola';
        if ($nome === 'antonio'){
            echo 'que nome bunito';
        } else {
            echo 'nome muito feio';
        }
    ?>
</body>
</html>
