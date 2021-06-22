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
        $n1 = $_GET["n1"];
        $n2 = $_GET["n2"];
        echo "A mediaentre $n1 e $n2 é:". ($n1 + $n2)/2;
        echo "<br>Portanto, o aluno esta: ".(($n1 + $n2)/2 >= 6 ? "Aprovado" : "Reprovado");
    ?>
</div>    
</body>
</html>