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
    <form action="Aula 14(Funcoes).php" method="get">
    <input type="number" name="n1" id=""> +
    <input type="number" name="n2" id=""> 
    <input type="submit" value="calcular">
    <br>
    </form>
    <?php
        /* NÃO RETORNANDO:
        function soma($a,$b){
            $s = $a + $b;
            echo "A soma de $a e $b é: $s";
        }

        if(isset($_GET["n1"]) && isset($_GET["n2"])){
        $n1 = $_GET["n1"];
        $n2 = $_GET["n2"];
        soma($n1,$n2);
        }else{
            echo "Esperando valores...";
        }
        */
        // RETORNANDO: 
        function soma($a,$b){
            return($a + $b);
        }

        if(isset($_GET["n1"]) && isset($_GET["n2"])){
        $n1 = $_GET["n1"];
        $n2 = $_GET["n2"];
        $soma = soma($n1,$n2);
        echo "A soma entre $n1 e $n2 = $soma";
        }else{
            echo "Esperando valores...";
        } 
    ?>
</div>    
</body>
</html>