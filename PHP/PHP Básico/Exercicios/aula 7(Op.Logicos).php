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
        $i = 2020 - $_GET["nascimento"];
        echo "A pessoa tem $i anos, portanto:";
        $res = ($i >= 18 and $i < 65) ? "OBRIGATORIO": "NÃO OBRIGATORIO";
        echo "<br>seu voto é $res "
    ?>
</div>    
</body>
</html>