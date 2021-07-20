<?php

$comments = array(
    array('Antonio', 'muito bom'),
    array('Jose', 'daora'),
);

$counter = 0;
$comment = array();
foreach ($_POST as $item){
    $comment[] = $item;

    $counter++;
    if ($counter == 2){
        $counter = 0;
        $comments[] = $comment;
        $comment = array();
    }
}

echo json_encode($comments);