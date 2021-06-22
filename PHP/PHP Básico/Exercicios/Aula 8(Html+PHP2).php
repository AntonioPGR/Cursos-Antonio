<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Html E PHP</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <?php
        $nome = isset($_GET["nome"])? $_GET["nome"]: "Não informado";
        $ano = isset($_GET["nasc"])?$_GET["nasc"]:"Não informado";
        $idade = isset($_GET["nasc"])?date("Y") - $ano:"Não informado";
        $s = isset($_GET["sex"])?$_GET["sex"]:"Não informado";
        echo "$nome é $s e tem $idade anos";
    ?>
    <a href="Aula 8(Html+PHP2).html">voltar</a>
</div>  
</body>
</html>