<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contagem</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <?php
        $c = 0;
        while($c < 10){
            $c++;
            echo " $c <br>";
        } 
        
        while($c > 1){
            $c--;
            echo " $c <br>"; 
        }   
    ?>
</div>    
</body>
</html>