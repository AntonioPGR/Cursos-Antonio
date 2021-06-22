<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        require_once 'pessoa.php';
        $a1 = new Aluno;
        $a1->setNome("Gustavo");
        $a1->setSexo("Masculino");
        $a1->setIdade(21);
        $a1->fazerAniversario();
        $a1->setMart(true);
        $a1->cancelMart();
        print_r($a1);

        $prof1 = new Professor;
        $prof1->receberAumento(500);
        print_r($prof1);
    ?>
</body>
</html>