<?php
    $values = array();
    foreach ($_POST as $post){
        $values[] = $post;
    };
    echo var_dump($values);
?>