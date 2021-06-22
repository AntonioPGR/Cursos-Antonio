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
        $n = isset($_POST["num"])? $_POST["num"]: 0;
        for($c = 1; $c <= 10; $c++){
            $tab = $n*$c;
            echo "$n x $c = $tab <br>";
        }
    ?>
    <a href="javascript:history.go(-1)">Voltar</a>
</div>    
</body>
</html>