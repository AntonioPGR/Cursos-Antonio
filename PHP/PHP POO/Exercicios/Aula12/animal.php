<?php

    abstract class Animal{
        protected $peso;
        protected $idade;
        protected $membros;

        abstract public function locomover();
        abstract public function alimentar();
        abstract public function emitirSom();
        
        public function getPeso(){
            return $this->peso;
        }
        public function setPeso($p){
            $this->peso = $p;
        }

        public function getidade(){
            return $this->idade;
        }
        public function setidade($i){
            $this->idade = $i;
        }

        public function getmembros(){
            return $this->membros;
        }
        public function setmembros($m){
            $this->membros = $m;
        }

    }