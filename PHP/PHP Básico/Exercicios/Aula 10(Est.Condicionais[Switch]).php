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
        $n = $_GET["num"];
        $op = $_GET["oper"];
        $nmop = "";
        switch($op){
            case 1:
                $res = $n*2;
                echo " o resultado do dobro de $n é: <span class='foco'>$res</span>";
        break;
            case 2:
                $res = pow($n,3);
                echo " o resultado de $n ao cubo é: <span class='foco'>$res</span>";
        break;
            case 3:
                $res = number_format(sqrt($n),2);
                echo " o resultado da raiz quadrada de $n é: <span class='foco'>$res</span>";
        break;
        }
    ?>
    <a href="Aula 10(Est.Condicionais[Switch]).html">Voltar</a>
</div>    
</body>
</html>