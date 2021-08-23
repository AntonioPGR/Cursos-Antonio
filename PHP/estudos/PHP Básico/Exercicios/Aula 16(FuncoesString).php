<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <?php
        $prod = "leite";
        $pr = 4.5;
        printf ("O %s custa R$ %.2f <br>", $prod , $pr);
        echo "//-----------------------------------------//<br>";
        //-----------------------------------------//
        $x[0] = 2;
        $x[1] = 4;
        $x[2] = 8;
        print_r($x);
        $x2 = array (3,5,7,9);
        echo "<br>";
        var_dump($x2);
        echo "<br>";
        var_export($x2);
        echo "<br>";
        echo "//-----------------------------------------//<br>";
        //---------------------------------------//
        $txt= "exemplo de string gigante  criado pelo php que mostrara a funcao do comando wordwrap";
        $r = wordwrap($txt, 10, "<br>\n", false);
        echo $r;
        echo "<br>";
        echo "//-----------------------------------------//<br>";
        //---------------------------------------//
        $nm = "Olá mundo";// o acento conta como un caractere mais
        $tam = strlen($nm);
        echo "O tamanho da string: $nm tem $tam caracteres <br>";
        echo "//-----------------------------------------//<br>";
        //--------------------------------------//
        $nome = "   José da Silva   ";
        echo (strlen($nome));
        echo "<br>";
        $novo = trim($nome);
        echo(strlen($novo));
        echo "<br>";
        $novol = ltrim($nome);
        echo(strlen($novol));
        echo "<br>";
        $novor = rtrim($nome);
        echo(strlen($novor));
        echo "<br>";
        echo "//-----------------------------------------//<br>";
        //--------------------------------------//
        $frase = "Eu irei estudar PHP";
        $count = str_word_count($frase,0);
        echo $count;
        echo "<br>";
        echo "//-----------------------------------------//<br>";
        //--------------------------------------//
        $site = "Curso Em Video";
        $vetor = explode(" ", $site);
        print_r($vetor);
        echo "<br>";
        echo "//-----------------------------------------//<br>";
        //--------------------------------------//
        $site = "CursoPHP";
        $vetor = str_split($site);
        print_r($vetor);
        echo "<br>";
        echo "//-----------------------------------------//<br>";
        //--------------------------------------//
        $vetor5[0] = "curso";
        $vetor5[1] = "em";
        $vetor5[2] = "video";
        $res = implode("#",$vetor5);
        echo $res;
        echo "<br>";
        echo "//-----------------------------------------//<br>";
        //--------------------------------------//
        $letra = chr(67);
        echo $letra;
        echo "<br>";
        echo "//-----------------------------------------//<br>";
        //--------------------------------------//
        $letra = "C";
        $cod = ord($letra);
        echo $cod;
    ?>
</div>    
</body>
</html>