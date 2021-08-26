<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <?php
        $n = $_GET["num"];
        echo "Calculando se o numero $n é primo <br>";
        echo "Multiplos:";
        $mult = 0;
        for($c = 1;$c <= $n;$c++){
            if($n % $c == 0){
                $mult++;
                echo " $c ";
            }    
        }
        echo "<br>temos $mult numeros multiplos de $n <br>";
        if($mult <= 2){
            echo "Portanto, esse numero é <span class='foco'>Primo</span>";
        }else{
            echo "Portanto, esse numero <span class='foco'> Não é Primo</span>";    
        }
    ?>    
</div>    
</body>
</html>