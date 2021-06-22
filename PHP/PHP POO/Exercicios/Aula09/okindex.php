<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        require_once 'Leitor.php';
        $p1 = new Leitor("Antonio", 13, "Masculino");
        $l1 = new Livro("A vida de Antonio", "antonio", 100, $p1);
        $l1->abrir();
        $l1->folhear(10);
        $l1->voltarPag();
        $l1->detalhesDoLivro();
        echo "<br> <br>";
        $l1->detalhesDoLeitor($p1);
        
    ?>
</body>
</html>