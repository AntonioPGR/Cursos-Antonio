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
        $idade = date("Y") - $_GET["nasc"];

        if($idade < 16){
            $tipov = "nao pode votar";
        }elseif (($idade >= 16 && $idade <= 18) || ($idade >= 65)){
                $tipov = "tem voto opcional";
            }else{
                $tipov = "tem voto obrigatorio";
            }
        echo "Voce tem $idade anos, e para essa idade você $tipov";
    ?>
</div>    
</body>
</html>