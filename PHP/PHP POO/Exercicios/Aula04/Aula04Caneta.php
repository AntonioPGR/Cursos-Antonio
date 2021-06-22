<?php

class Caneta{

        private $modelo;
        private $ponta;
        private $tampada;
        private $cor;

        //metodo construtor simples:
        /*
        public function __construct(){ //pode ser __construct ou o nome da classe
            $this->modelo = "Stabillo";
            $this->ponta = 0.5;
            $this->cor = "preto";
            $this->tampar();
        }
        */

        //metodo construtor com parametros

        public function Caneta($m, $p, $c){
                $this->setModelo($m);
                $this->setponta($p);
                $this->setCor($c);
                $this->tampar();
        }

        public function setCor($c){
                $this->cor = $c; 
        }

        public function tampar(){
                $this->tampada = true;
        }

        public function getModelo(){
                return $this->modelo;
        }

        public function setModelo($m){
                $this->modelo = $m;
        }

        public function getPonta(){
                return $this->ponta;
        }

        public function setPonta($p){
                $this->ponta = $p;
        }

}

?>