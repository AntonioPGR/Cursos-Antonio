<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="_css/estilo.css">
    <?php
        $txt = isset($_GET["txt"])? $_GET["txt"]:"Texto Não informado";
        $size = isset($_GET["size"])?$_GET["size"]: "14pt";
        $cor = isset($_GET["color"])?$_GET["color"]:"#000000";
    ?>
    <style>
        span.txt {
            color: <?php echo $cor; ?>;
            font-size: <?php echo $size; ?>;
        }
    </style>
</head>
<body>
<div>
    <?php
        echo "<span class = 'txt'>$txt</span>";
    ?>
    <br>
    <a href="Aula 8(Html+PHP3).html">voltar</a>
</div>    
</body>
</html>