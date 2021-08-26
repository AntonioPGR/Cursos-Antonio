<?php
    require_once 'mamifero.php';

class Cachorro extends Mamifero{

    public function enterrarOsso(){
        echo 'osso enterrado <br>';
    }

    public function abanarRabo(){
        echo "abanando rabo<br>";
    }

    public function emitirSom(){
        echo 'au!au!au!<br>';
    }

    public function reagirFrase($f){

        if($f == "agradavel"){
            echo"abanando o rabo e latindo<br>";
        }else{
            echo "rosnando<br>";
        }

    }

    public function reagirHr($hr, $min){

        if($hr <= 12){
            echo "abanando rabo<br>";
        }elseif($hr <= 18){
            echo "brincar<br>";
        }else{
            echo "ignorar<br>";
        }

    }

    public function reagirDono($dono){
        
        if($dono){
            echo "abanar<br>";
        }else{
            echo "rosnar<br>";
        }

    }

    public function reagirIdade($idd, $ps){
        
        if($idd <= 5){

            if($ps < 10){
                echo "abanar<br>";
            }else{
                echo "latir<br>";
            }

        }else{
            if($ps < 10){
                echo "rosnar<br>";
            }else{
                echo "ignorar<br>";
            }

        }

    }
}