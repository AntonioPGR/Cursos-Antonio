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
        require_once 'visualizacao.php';
        $v[0] = new Video("Aula 14 PHP POO");
        $v[1] = new Video("Aula 15 PHP POO");
        $g[0] = new Gafanhoto("antoninhopgr@gmail.com", "Antonio", 14, "masculino");
        $g[1] = new Gafanhoto("antoninhopgr@gmail.com", "juba", 14, "masculino");
        $g[2] = new Gafanhoto("antoninhopgr@gmail.com", "juba", 14, "masculino");

        $view[0] = new Visualizacao($g[0], $v[0]);
        $view[1] = new Visualizacao($g[1], $v[0]);
        $view[2] = new Visualizacao($g[2], $v[0]);
        $view[0]->avaliarNota(10);
        $view[1]->avaliarNota(5);
        $view[2]->avaliarNota(7);
        print_r($view[0]);

    ?>
</pre>
</body>
</html>