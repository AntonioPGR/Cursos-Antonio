<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>funcoes externas</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <?php
        include "Aula 15(Funcoes).php"; // Com o require: se o arquivo nao for encontrado o progranma para. // Com o include: se o arquivo nao for encontrado o programa continua mesmo assim // O include once e required once seguem a mesma lógica dos outros, porem, é quando vc não sabe se ja carregou o arquivo, ai, vc usa eles, pois, se ja carregou ele nao carrega dnv, porem se ainda n foi caregado ele carrega o arquivo.
        echo "<h2>Testando funções</h2>";
        ola();
        mostravalor(4);
    ?>
</div>    
</body>
</html>