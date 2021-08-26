<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strings</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <?php
        $nome = "ANTONIO PACHECO";
        echo "seu nome é: ". strtolower($nome); 
        echo "<br>//-----------------------------------------//<br>";
        //--------------------------------------//   
        $nome = "antonio pacheco";
        echo "Seu nome é: ". strtoupper($nome);
        echo "<br>//-----------------------------------------//<br>";
        //--------------------------------------// 
        $nome = "antonio pacheco"; 
        echo "O seu nome é: ". ucfirst($nome); 
        // ele põe a primeira letra em maiusc, mas n deixa as outras em minusc
        echo "<br>//-----------------------------------------//<br>";
        //--------------------------------------// 
        echo "Seu nome é: ". ucwords($nome);
        echo "<br>//-----------------------------------------//<br>";
        //--------------------------------------//
        echo "seu nome ao contrario é: ". strrev($nome);
        echo "<br>//-----------------------------------------//<br>";
        //--------------------------------------//
        echo $nome;
        echo "<br>A palavra Pacheco esta na posição: ".strpos($nome, "pacheco");
        echo "<br>//-----------------------------------------//<br>";
        //--------------------------------------//
        echo $nome;
        echo "<br>A palavra Pacheco esta na posição: ". stripos($nome, "PACHECO");
        echo "<br>//-----------------------------------------//<br>";
        //--------------------------------------//
        $frase = "hoje eu estudei php no curso de php";
        echo $frase;
        print "<br>A palavra php aparece ". substr_count($frase, "php")." vezes";
        echo "<br>//-----------------------------------------//<br>";
        //--------------------------------------//
        $site = "curso em video";
        echo(substr($site,0,5));// o 0 é onde começa, e o 5 é O NUMERO DE CASAS que vai andar
        echo "<br>//-----------------------------------------//<br>";
        //--------------------------------------//
        $nome = "Antonio";
        $novo = str_pad($nome,10 ,"_", STR_PAD_RIGHT);
        print("meu novo prof $novo é top");
        echo "<br>//-----------------------------------------//<br>";
        //--------------------------------------//
        $txt = "ola";
        echo(str_repeat($txt, 4));
        echo "<br>//";

        $barra = "-";
        echo(str_repeat($barra, 50));
        echo "// <br>";
        //--------------------------------------//
        $frase = "gosto de estudar Matematica!Matematica é muito legal!";
        $novafrase = str_replace("matematica", "php",$frase);// vai da erro pq ta diferente a escrita, para isso, vc pode usar:
        $novafrase = str_ireplace("matematica","php",$frase);
        echo $novafrase;


    ?>
</div>    
</body>
</html>