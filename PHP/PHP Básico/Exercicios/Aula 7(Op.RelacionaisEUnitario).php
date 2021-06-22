<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Op.unitarioERelacionais</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <?php
        $n1 = $_GET["a"];
        $n2 = $_GET["b"];
        $tipo = $_GET["op"];
        echo "Os valores passados foram: $n1 e $n2 com a operação: $tipo <br>";
        $r = $tipo == "s" ? $n1+$n2 : $n1*$n2;
        echo "O resultado é: $r"; 
    ?>
</div>    
</body>
</html>