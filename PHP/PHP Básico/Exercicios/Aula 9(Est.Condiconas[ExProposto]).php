<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notas</title>
    <link rel="stylesheet" href="_css/estilo.css">
    <style>
            span{
                color: #ff0000;
            }
    </style>
</head>
<body>
<div>
    <?php
        $n1 = $_GET["not1"];
        $n2 = $_GET["not2"];
        $m = ($n1 + $n2)/2;
        echo "A média do aluno é: <span>$m</span> <BR>";
        if($m < 5){
            echo "Portanto ele está <span>REPROVADO</span>";
        }elseif($m >= 5 && $m <=7){
            echo "Portanto ele está em <span>RECUPERAÇÃO</span>";
        }else{
            echo "Potanto ele está <span>APROVADO</span>";
        }
    ?>    
</div>    
</body>
</html>