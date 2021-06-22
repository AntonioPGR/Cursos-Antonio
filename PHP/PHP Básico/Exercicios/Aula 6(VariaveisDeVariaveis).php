<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variaveis de Variaveis</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <?php
        $cev = "CursoEmVideo";
        $$cev = "CursoDePHP";

        echo "$cev <BR>";
        echo $CursoEmVideo;
    ?>
</div>    
</body>
</html>