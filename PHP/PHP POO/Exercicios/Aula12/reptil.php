<?php
    require_once 'animal.php';

    class Reptil extends Animal{
        private $corEscama;

        public function getCorEscama(){
            return $this->corEscama;
        }
        public function setCorEscama($c){
            $this->corEscama = $c;
        }

        public function locomover(){
            echo 'rastejando<br>';
        }

        public function alimentar(){
            echo 'comendo plantas<br>';
        }

        public function emitirSom(){
            echo 'ziii<br>';
        }
    }

    class cobra extends Reptil{}

    class tartaruga extends Reptil{
        public function locomover(){
            echo "andar Lerdo<br>";
        }

    }