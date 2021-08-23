<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vetores</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <pre>
    <?php
        $und = "_";
        $n = array(3,5,8,2);
        $n[] = 7;
        $n[] = 10;
        print_r($n);

        print(str_repeat($und, 30));

        $n1 = 0;
        $n2 = 20;
        $c = range($n1,$n2,4);
        print_r($c);

    ?>
    </pre>
</div>    
</body>
</html>