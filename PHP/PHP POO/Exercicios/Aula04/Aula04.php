<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Caneta</title>
</head>
<body>
<pre>
    <?php
        require_once 'Aula04Caneta.php';
        $c1 = new Caneta("Bic", 0.3, "vermelho");
        $c2 = new Caneta("KKK", 0.5,"Preta");

        print_r($c1);
        print_r($c2);
        /*
        $c1->setModelo("Bic Cristal");
        $c1->setPonta(0.5);
        print_r($c1);

        echo "Eu tenho uma caneta {$c1->getModelo()} de ponta {$c1->getPonta()}"
        */
    ?>
</pre>    
</body>
</html>