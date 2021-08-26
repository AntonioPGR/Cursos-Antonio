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
        $v1 = $_GET["v1"]; 
        $v2 = $_GET["v2"];
        $v3 = $_GET["v3"];
        $v4 = $_GET["v4"];
        $v5 = $_GET["v5"];
        
        echo "Valor 1 = $v1 <br>";
        echo "Valor 2 = $v2 <br>";
        echo "Valor 3 = $v3 <br>";
        echo "Valor 4 = $v4 <br>";
        echo "Valor 5 = $v5 <br>";
    ?>
</div>    
</body>
</html>