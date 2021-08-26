<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FuncaoVetores</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <pre>
    <?php
        // mostrar vetor:
        $n = array(1,3,5,7,9);
        print_r( $n );
        echo "<br>-----<br>";
        var_dump($n);
        echo "<br>-----<br>";

        //numeros de elementos do vetor:
        echo "o vetor tem ".count($n)." elementos";
        echo "<br>-----<br>";

        //add elemento no final:
        print_r($n);
        $n[] = 2;
        print_r($n);
        echo "<br>-----<br>";

        // add e remover elementos do final:
        array_push($n, 4);
        print_r($n);
        array_pop($n);
        print_r($n);
        echo "<br>-----<br>";

        // add e remover elementos no inicio do vetor:
        print_r($n);
        array_unshift($n,7);
        print_r($n);
        array_shift($n);
        print_r($n);
        echo "<br>-----<br>";

        //colocando vetores em ordem
        sort($n);
        print_r($n);
        echo "<br>-----<br>";

        //ordenando na ordem reversa:
        rsort($n);
        print_r($n);
        echo "<br>-----<br>";

        // ordenando associativamente, com valores e indices:
        $n = array(12,15,23,11,9);
        print_r($n);
        asort($n);
        print_r($n);
        echo "<br>-----<br>";

        // ordenando associativamente reversamente
        arsort($n);
        print_r($n);
        echo "<br>-----<br>";

        // colocar indices em ordem:
        ksort($n);
        print_r($n);
        echo "<br>-----<br>";

        //colocar indices em ordem reversas:
        krsort($n);
        print_r($n);

    ?>
    </pre>
</div>    
</body>
</html>