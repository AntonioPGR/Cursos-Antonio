<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML+PHP</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <?php
        $valor = $_GET["v"];
        echo "A raiz de $valor é: ". number_format(sqrt($valor),2);
    ?>
    <a href="Aula 8(Html+PHP).html">Voltar</a>
</div>    
</body>
</html>