<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        require_once 'peixe.php';
        require_once 'ave.php';
        require_once 'reptil.php';
        require_once 'mamifero.php';
        /*
        $m = new Mamifero;
        $m->setIdade(2);
        $m->setPeso(16.9);
        $m->setMembros(4);
        $m->locomover();
        $m->alimentar();
        $m->emitirSom();
        print_r($m);
        echo "<br>";

        $a = new Ave;
        $a->setIdade(3);
        $a->setPeso(5);
        $a->setMembros(4);
        $a->locomover();
        $a->alimentar();
        $a->emitirSom();
        $a->fazerNinho();
        print_r($a);
        echo "<br>";

        $r = new Reptil;
        $r->setIdade(5);
        $r->setPeso(2);
        $r->setMembros(0);
        $r->locomover();
        $r->alimentar();
        $r->emitirSom();
        print_r($r);
        echo "<br>";

        $p = new Peixe;
        $p->setIdade(2);
        $p->setPeso(16.9);
        $p->setMembros(4);
        $p->locomover();
        $p->alimentar();
        $p->emitirSom();
        $p->soltarBolha();
        print_r($p);
        echo "<br>";

*/

        $c = new Canguru;
        $c->setIdade(2);
        $c->setPeso(16.9);
        $c->setMembros(4);
        $c->setCorPelo("Marrom");
        $c->locomover();
        $c->alimentar();
        $c->emitirSom();
        $c->usarBolsa();
        print_r($c);
        echo "<br>";

        $cao = new cachorro;
        $cao->setIdade(2);
        $cao->setPeso(16.9);
        $cao->setMembros(4);
        $cao->setCorPelo("Marrom");
        $cao->locomover();
        $cao->alimentar();
        $cao->emitirSom();
        $cao->enterrarOsso();
        $cao->abanarRabo();
        print_r($cao);
        echo "<br>";

        $t = new Tartaruga;
        $t->setIdade(2);
        $t->setPeso(16.9);
        $t->setMembros(4);
        $t->locomover();
        $t->alimentar();
        $t->emitirSom();
        print_r($t);
        echo "<br>";

    ?>
</body>
</html>