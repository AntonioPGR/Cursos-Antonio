<?php
    require_once 'Interface.php';
    class ControleRemoto implements Controlador{

        private $volume;
        private $ligado;
        private $tocando;

        function __construct(){
            $this->volume = 50;
            $this->ligado = false;
            $this->tocando = false;
        }

        private function getVolume(){
            return $this->volume;
        }
        private function setVolume($v){
            $this->volume = $v;
        }

        private function getLigado(){
            return $this->ligado;
        }
        private function setLigado($l){
            $this->ligado = $l;
        }

        private function getTocando(){
            return $this->tocando;
        }
        private function setTocando($t){
            $this->tocando = $t;
        }

        public function ligar(){  
            $this->setLigado(true);
        }

        public function desligar(){
            $this->setligado(false);
        }

        public function abrirMenu(){
            echo "Esta ligada a tv?";
            echo $this->getLigado() ? 'sim':'nao';
            echo "<br>";
            echo "Esta tocando a tv?";
            echo $this->getTocando() ? 'sim':'nao';
            echo "<br>";
            echo "volume:". $this->getVolume();
            for($c = 0; $c<= $this->getVolume(); $c+= 10){
                echo "|";
            }
        }

        public function fecharMenu(){
            echo "Menu Fechado";
        }

        public function maisVolume(){
            if($this->getLigado()){
                $this->setVolume($this->volume + 5);
            }
        }

        public function menosVolume(){
            if($this->getLigado()){
                $this->setVolume($this->volume -5);
            }
        }

        public function ligarmudo(){
            if($this->getLigado() && getVolume() > 0){
                $this->setVolume(0);
            }
        }

        public function desligarMudo(){
            if($this->getLigado() && getVolume() == 0){
                $this->setVolume(50);
            }
        }

        public function play(){
            if($this->getLigado()){
                if($this->getVolume()){
                    $this->setTocando(true);
                }
            }
        }

        public function pause(){
            if($this->getLigado()){
                if(getVolume()){
                    $this->setTocando(false);
                }
            }
        }

    }

?>