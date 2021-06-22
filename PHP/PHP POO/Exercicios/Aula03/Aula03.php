<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        require_once 'Aula03Caneta.php';
        $c1 = new Caneta;
        $c1 -> modelo = "BIC Cristal";
        $c1 -> cor = "Laranja";
        //$c1 -> ponta = 0.5;
        //$c1 -> carga = 70;
        //$c1 -> tampada = true;

        $c1 -> rabiscar();
        $c1 -> tampar();// as funções dentro da "mãe" pode modificar algo protegito e algo privado
        $c1 -> recarregar();
        //$c1 -> destampar();

        print_r($c1);
        
    ?>
</body>
</html>