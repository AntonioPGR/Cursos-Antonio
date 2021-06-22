<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

    require_once 'cachorro.php';
    $c = new Cachorro;
    $c->emitirSom();
    $c->reagirFrase("agradavel");
    $c->reagirFrase("bravo");
    $c->reagirHr(11,45);
    $c->reagirHr(21,00);
    $c->reagirDono(true);
    $c->reagirDono(false);
    $c->reagirIdade(2, 12.5);
    $c->reagirIdade(17, 4.5);

?>
</body>
</html>