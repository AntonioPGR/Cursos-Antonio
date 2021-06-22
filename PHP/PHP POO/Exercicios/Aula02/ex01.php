<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>exercicio</title>
</head>
<body>
    <?php
        require_once 'ex01Burrico.php';
            $c1 = new Burrico;
            $c1->cor = "branco";
            $c1->peso = 3;
            $c1->tamanho = "pequeno";
            $c1->dinheiro = 10;
            $c1->quantidade = "metade";

            $c1->quantidade();
    ?>    
</body>
</html>