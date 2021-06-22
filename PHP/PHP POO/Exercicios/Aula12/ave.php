<?php
    require_once 'animal.php';

    class Ave extends Animal{
        private $corPena;

        public function getCorPena(){
            return $this->corPena;
        }
        public function setCorPena($c){
            $this->corPena = $c;
        }

        public function locomover(){
            echo 'Voando<br>';
        }

        public function alimentar(){
            echo 'comendo frutas<br>';
        }

        public function emitirSom(){
            echo 'piu<br>';
        }

        public function fazerNinho()
        {
            echo "ninhoFeito<br>";
        }
    }

    class arara extends ave{}