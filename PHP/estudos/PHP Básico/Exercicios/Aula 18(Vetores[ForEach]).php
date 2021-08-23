<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ForEach</title>
    <link rel="stylesheet" href="_css/estilo.css">
</head>
<body>
<div>
    <pre>
    <table border="1"> <tr>
    <?php
        $n = range(5,20,5);
        foreach($n as $v) {
            echo "<td> $v ";
        } 
    ?>
    </table>
    </pre>
</div>    
</body>
</html>