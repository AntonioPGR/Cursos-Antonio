<?php
    require_once 'animal.php';

    class Peixe extends Animal{
        private $corEscama;

        public function getCorEscama(){
            return $this->corEscama;
        }
        public function setCorEscama($c){
            $this->corEscama = $c;
        }

        public function locomover(){
            echo 'nadando<br>';
        }

        public function alimentar(){
            echo 'comendo algas<br>';
        }

        public function emitirSom(){
            echo 'blup<br>';
        }

        public function soltarBolha()
        {
            echo "bolhas<br>";
        }
}

    class peixeDourado extends peixe{}