<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funçoes Aritiméticas</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <?php
    $n1 = $_GET["x"];
    $n2 = $_GET["y"];
    echo "<h3>Valores recebidos: $n1 e $n2</h3>";
    echo "o valor absoluto de $n1 é: ". abs($n1). " e o de $n2 é: ". abs($n2);
    echo "<br>O valor de $n1<sup>$n2</sup> é: ". pow($n1, $n2);
    echo "<br>A raiz<sup>2</sup> de $n2 é: ". sqrt($n1);
    echo "<br>O valor arredondado de $n1 é: ". round($n1); // pode ser ceil(aredonda sempre para cima) e floor(sempre para baixo)
    echo "<br>A parte inteira de $n1 é: ". intval($n1);
    echo "<br>O valor de $n2 em moeda é: ". number_format($n2,2,",",".")
    ?>
</div>
</body>
</html>