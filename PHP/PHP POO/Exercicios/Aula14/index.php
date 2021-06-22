<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<pre>
    <?php
        require_once 'video.php';
        require_once 'Gafanhoto.php';
        $v[0] = new Video("Aula 14 PHP POO");
        print_r($v[0]);

        $g[0] = new Gafanhoto("antoninhopgr@gmail.com", "Antonio", 14, "masculino");
        print_r($g[0]);

    ?>
</pre>
</body>
</html>