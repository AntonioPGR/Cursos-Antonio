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
