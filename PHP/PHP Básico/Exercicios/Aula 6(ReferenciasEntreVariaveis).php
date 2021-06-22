<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Referencias Entre Variaveis</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <?php
    $a = 3;
    $b = &$a;
    $b += 7;
    echo "$a <br>";
    echo $b;
    ?>
</div>    
</body>
</html>