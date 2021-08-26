<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        require_once 'Aula02Caneta.php';
        $c1 = new Caneta;
        $c1->cor = "Azul";
        $c1->ponta = 0.5;
        $c1->tampada = false;

        $c1->tampar();

        print_r($c1);

        echo "<br>";
        //--------------------------
        $c2 = new Caneta;
        $c2->cor = "preta";
        $c2->ponta = "0.9";
        $c2->tampada = true;
        $c2->destampar();
        print_r($c2);

    ?>
</body>
</html>