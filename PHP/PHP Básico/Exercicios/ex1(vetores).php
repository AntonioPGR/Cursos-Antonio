<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vetor</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <form action="ex1(vetores).php" method="get">
        <input type="number" name="n" id="">
        <input type="submit" value="calcular">
    </form>

    <?php
        if(isset($_GET["n"])){
            $n = $_GET["n"];
            for($c = 1; $c <= $n; $c++){
                $alet = rand( 1, 10);
                $vet[] = $alet;

                $np = 0;
                $ni = 0;

                if($alet % 2 == 0){
                    $numpares[] = $alet;
                }else{
                    $numimpares[] = $alet;
                }
            }
            
            print "Temos ". count($numpares) . " numeros pares, que são: <br>";
            foreach($numpares as $v){
                echo " $v,";
            }
            
            print "Temos " . count($numimpares) . " numeros impares, que são: <br>";
            foreach($numimpares as $a){
                echo " $a,";
            }

        }else{
            echo "Esperando os valores...";
        }
    ?>
</div>    
</body>
</html>