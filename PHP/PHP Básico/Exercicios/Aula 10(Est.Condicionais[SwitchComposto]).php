<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Switch composto</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <?php
        $ds = isset($_GET["ds"]) ? $_GET["ds"] : 0;
        switch ($ds) {
            case 1:
            case 7:
                $res = "Tamo de follga :)";
                break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                $res = "Levanta e vai estuda vagabundo ;)";
                break;
            default:
                $res = "[ERRO]";
        }
        echo $res
    ?>
    <br><a href="javascript:history.go(-1)"></a>
    </div>    
</body>
</html>