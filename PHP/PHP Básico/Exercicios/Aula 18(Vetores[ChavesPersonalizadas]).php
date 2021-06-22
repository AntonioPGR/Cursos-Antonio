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
        $v = array( 1 => "A",
                    4 => "B",
                    6 => "C",
                    8 => "D");
        $v[] = "E";
        unset($v[4]);
        print_r($v);
    ?>
</pre>
</div>   
</body>
</html>