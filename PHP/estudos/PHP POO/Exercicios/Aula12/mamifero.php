<?php

    require_once 'animal.php';

    class Mamifero extends Animal{
        private $corPelo;

        public function getCorPelo(){
            return $this->corPelo;
        }
        public function setCorPelo($c){
            $this->corPelo = $c;
        }

        public function locomover(){
            echo 'correndo<br>';
        }

        public function alimentar(){
            echo 'tomando leite<br>';
        }

        public function emitirSom(){
            echo 'raaaw<br>';
        }
}

    class Canguru extends mamifero{

        public function locomover(){
            echo 'pulando<br>';
        }

        public function usarBolsa(){
            echo "Usando a bolsa<br>";
        }
    }

    class cachorro extends mamifero{

        public function enterrarOsso(){
            echo 'osso enterrado <br>';
        }

        public function abanarRabo(){
            echo "abanando rabo<br>";
        }

        public function emitirSom(){
            echo 'au!au!au!<br>';
        }
    }