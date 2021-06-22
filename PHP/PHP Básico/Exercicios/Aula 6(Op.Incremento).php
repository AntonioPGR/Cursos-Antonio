<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operadores de incremento</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <?php
    $ano = $_GET["a"];
    echo "O ano atual é: $ano";
    echo "<br>O proximo ano será: ". ++$ano;//se usar o pos-decremento ele vai mostrar o valor e depois subtrair, por isso deve usar o pre-decremento, para que ele subtraia primeiro
    $ano = $_GET["a"];
    echo "<br> O ano anterior foi: ". --$ano . "<br>"; 
    ?>
</div>    
</body>
</html>