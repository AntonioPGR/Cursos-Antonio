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
        $m = array(
                    array(6,12),
                    array(7,15),
                    array(21,40),
                    );
        for($c = 0; $c <=2;$c++){
            for ($i=0; $i <= 1; $i++) { 
                print " ".$m[$c][$i] ;
            }
            print "<br>";
        }
    ?>

</div>    
</body>
</html>