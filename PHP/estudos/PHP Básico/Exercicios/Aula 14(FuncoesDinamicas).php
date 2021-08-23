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
        function soma( ) {
            $p = func_get_args();
            $tot = func_num_args();
            $tot -= 1;
            $s = 0;
            for($i=0; $i <= $tot; $i++){
                $s += $p[$i];
            }
            return $s;
        }

        $r = soma(1,2,3,4,5,6,7,8);
        echo "A soma é $r";
    ?>
</div>    
</body>
</html>