<?php

    require_once 'Pessoa.php';

    class Gafanhoto extends Pessoa{

        private $login;
        private $totAssistido;

        public function Gafanhoto($l, $n, $idd, $sx){
            parent::__construct($n, $idd, $sx);
            $this->setLogin($l);
            $this->setTotAssistido(0);
        }

        public function getLogin() {
            return $this->login;
        }

        public function setLogin($login) {
            $this->login = $login;
        }

        public function getTotAssistido() {
            return $this->totAssistido;
        }

        public function setTotAssistido($totAssistido) {
            $this->totAssistido = $totAssistido;
        }

        public function viuMaisUm(){
            $this->setTotAssistido($this->getTotAssistido() + 1);
        }

}