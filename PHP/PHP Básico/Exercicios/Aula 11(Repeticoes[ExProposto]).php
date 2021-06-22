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
        $ini = isset($_GET["ini"])? $_GET["ini"]: 1;
        $fim = isset($_GET["fim"])? $_GET["fim"]: 1;
        $pass = isset($_GET["pass"])?$_GET["pass"]:1;

        if($ini <= $fim){
            while($ini <= $fim){
                echo "$ini<br>";
                $ini = $ini + $pass;
            }
        }else{
            while($ini >= $fim){
                echo "$ini<br>";
                $ini = $ini - $pass;
            }
        }        
    ?>
</div>    
</body>
</html>