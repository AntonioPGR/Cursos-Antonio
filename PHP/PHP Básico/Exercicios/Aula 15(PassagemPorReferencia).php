<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PassagemPorReferencia</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <?php
        function teste(&$x){
            $x += 2;
            echo "O valor de X é: $x";
        }

        $a = 2;
        teste($a);
        echo "<br>O valor de A é: $a";
    ?>
</div>    
</body>
</html>