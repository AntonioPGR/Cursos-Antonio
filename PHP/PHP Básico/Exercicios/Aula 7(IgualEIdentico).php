<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <?php
        $a = 3;
        $b = "3";
        $res = $a == $b ? "verdadeiro" : "falso";
        echo "As variaveis a e b são iguais? $res <br>";
        $res = $a === $b ? "verdadeiro" : "falso";
        echo "As variaveis a e b são identicas? $res";
    ?>
</div>   
</body>
</html>