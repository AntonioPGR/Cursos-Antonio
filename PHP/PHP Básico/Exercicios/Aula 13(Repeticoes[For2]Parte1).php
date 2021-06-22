<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <form action="Aula 13(Repeticoes[For2]Parte2).php" method="post">
        numero: 
        <select name="num" id="">
            <?php
                for($c=1; $c <= 10; $c++){
                    echo "<option value='$c'>$c</option>";
                }
            ?>
        </select>
        <input type="submit" value="Calcular Tabuada">
    </form>
</div>    
</body>
</html>