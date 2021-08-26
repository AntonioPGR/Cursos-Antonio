<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Condições</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
        <?php
            $ano = $_GET["nasc"];
            $idade = date("Y") - $ano;
            echo "Voce nasceu em $ano e tem $idade";

            if($idade >= 18){
                echo "<br>Logo, você já pode votar e dirigir";
            }else{
                echo "<br>logo, você nao pode votar e dirigir";
            }
        ?>
        <br>
        <a href="Aula 9(Est.condicionais[IF]).html">voltar</a>
</div>    
</body>
</html>