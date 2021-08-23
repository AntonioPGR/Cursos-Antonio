<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Op.Atribuição</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <?php
        $p = $_GET["a"];
        echo "O preço do produto é: $p";
        $pmais = $p;
        $pmais  += ($p*10)/100;
        echo "<br>O preço com 10% de acrescimo é:". number_format($pmais,2,",",".");
        $pmenos = $p;
        $pmenos -= ($p*10)/100;
        echo "<br>O preço com desconsto de 10% é:". number_format($pmenos,2,",",".");
    ?>
</div>    
</body>
</html>