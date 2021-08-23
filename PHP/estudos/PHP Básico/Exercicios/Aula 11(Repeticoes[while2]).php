<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>While</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <form action="Aula 11(Repeticoes[while2]parte2).php" method="get">
        <?php
        $c=1;
        while ($c <= 5) {
        echo "valor $c: <input type='number' name='v$c' max= '100' min='0' value= '0'/><br>";
        $c++;
        }
        ?>
        <input type="submit" value="enviar" class="botao">

    </form>
</div>    
</body>
</html>