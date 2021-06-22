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
        $est = $_GET["est"];
        switch($est){
            case 1:
                echo "Você mora na região <span class='foco'>SUL</span>";
            break;
            case 2:
                echo "Você mora na região <span class='foco'>SUDESTE</span>";
            break;
            case 3:
                echo "Você mora na região <span class='foco'>CENTRO-OESTE</span>";
            break;
            case 4:
                echo "Você mora na região <span class='foco'>NORDESTE</span>";
            break;
            case 5:
                echo "Você mora na região <span class='foco'>NORTE</span>";
            break;
        }
    ?>
</div>    
</body>
</html>