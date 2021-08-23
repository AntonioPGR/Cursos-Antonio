<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        date_default_timezone_set('America/sao_paulo'); //horario padrão de são paulo

        // $hAtual = intval(date('H')); // pega hora atual e dependendo exibe um valor

        // if ($hAtual < 6){
        //     echo 'a mimir';
        // } elseif ($hAtual < 12){
        //     echo 'ohayo';
        // } elseif ($hAtual < 18){
        //     echo 'tardee!';
        // } else {
        //     echo 'só quero joga em paz';
        // }
        
        // $date = mktime(13, 30, 00, 5, 26, 2019); // hora, min, sec, month, day, year
        // echo date('d-m-y H:i:s', $date)~

        // $date = strtotime('July 4'); // converte uma string para time
        // echo date('d l', $date);

        $date = strtotime('tomorrow');
        echo date('d / m / Y');
    ?>
</body>
</html>