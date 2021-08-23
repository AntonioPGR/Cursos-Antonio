<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<pre>
    <?php

        require_once 'Visitante.php';
        require_once 'Aluno.php';
        require_once 'professor.php';

        $v1 = new Visitante;
        $v1->setNome("Jubileu");
        $v1->setSexo("Masculino");
        $v1->setIdade(33);
        
        echo '<br>';

        $a1 = new Aluno;
        $a1->setNome("Gustavão");
        $a1->setSexo("masculino");
        $a1->setIdade(20);
        $a1->setMart(1231);
        $a1->setCurso("TI");
        #$a1->pagarMensalidade();
        echo "<br>";
        
        echo "<br>";

        $b1 = new Bolsista;
        $b1->setNome("Paula");
        $b1->setSexo("feminino");
        $b1->setIdade(16);
        $b1->setMart(1232);
        $b1->setCurso("TE");
        $b1->setBolsa(90);
        #$b1->renovarBolsa();
        echo "<br>";
        #$b1->pagarMensalidade();
        echo "<br>";
        

        $p1 = new Professor;
        $p1->setNome("luis");
        $p1->setSexo("Masculino");
        $p1->setIdade(45);
        $p1->setEspecialidade("Geografia");
        $p1->setSalario(1500);
        $p1->receberAumento(250);
        print_r($p1);
        echo "<br>";
        
        $t1 = new Tecnico;
        $t1->setNome("Ana");
        $t1->setSexo("Feminino");
        $t1->setIdade("19");
        $t1->setMart(true);
        $t1->setCurso("Geografia");
        $t1->setRegProf("Geografia");
        $t1->pagarMensalidade();
        $t1->praticar();
        echo "<br>";
        print_r($t1);

    ?>
</pre>
</body>
</html>