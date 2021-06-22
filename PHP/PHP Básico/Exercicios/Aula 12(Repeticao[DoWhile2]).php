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
        $num = $_GET["num"];
        $c = 1;
        $fat = 1;
        do{
            $fat = $fat*$c;
            $c++;
        }while($c <= $num);

        echo "<h4>O fatorial de $num é:</h4>";
        echo "<h2>".number_format($fat,0,",",".")."</h2>";
    ?>
</div>    
</body>
</html>