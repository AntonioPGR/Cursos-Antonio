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
<pre>
    <?php
        $perfil = array(
            "nome" => "Antonio",
            "idade" => 14,
            "peso" => 70
        );
        $perfil["nota"] = 10 ;
        
        foreach($perfil as $nv => $v){
            print "O valor de $nv é $v <br>";
        }
    ?>
</pre>
</div>    
</body>
</html>