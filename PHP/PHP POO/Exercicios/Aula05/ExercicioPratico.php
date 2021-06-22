<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Conta Do Banco </title>
</head>
<body>
<pre>
    <?php

        require_once 'ContaBanco.php';
        $p1 = new ContaBanco; //jubileu
        $p1->abrirConta("cc");
        $p1->setDono("Jubileu");
        $p1->setNumConta(100001);
        $p1->depositar(300);
        $p1->pagMensal();
        $p1->sacar(338);
        $p1->fecharConta();
        echo "<br>Jubileu: <br>";
        print_r($p1);
        echo "<br>";

        $p2 = new ContaBanco; //creuza
        $p2->abrirConta("cp");
        $p2->setDono("Creuza");
        $p2->setNumConta(100002);
        $p2->depositar(500);
        $p2->sacar(100);
        $p2->pagMensal();
        echo "<br>Creuza:<br>";
        print_r($p2);
        
    ?>
</pre>
</body>
</html>