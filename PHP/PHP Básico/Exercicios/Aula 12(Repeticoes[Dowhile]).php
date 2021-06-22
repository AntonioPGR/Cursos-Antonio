<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>contador</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <?php
        // Progressiva
        $c = 0;
        do{
            $c ++;  
            echo $c ."<BR>"; 
        }while($c < 10);
        // regressiva:
        do{
            $c--;
            echo $c ."<br>";
        }while($c > 1);
    ?>
</div>    
</body>
</html>