<?php
    require_once 'video.php';
    require_once 'Gafanhoto.php';

    class Visualizacao {

        protected $espectador;
        protected $filme;

        public function Visualizacao($e, $f){
            $this->espectador = $e;
            $this->espectador->setTotAssistido($this->espectador->getTotAssistido() + 1);

            $this->filme = $f;
            $this->filme->setViews($this->filme->getViews() + 1);
        }

        public function avaliar(){
            $this->filme->setAvaliacao(5);
        }

        public function avaliarNota($n){
            $this->filme->setAvaliacao($n);
        }

        public function avaliarPorc($porc){
            $nova = 0;
            switch ($porc){
                case 0:
                    $nova = 0;
                break;
                case 20:
                    $nova = 2;
                break;
                case 40:
                    $nova = 4;
                break;
                case 60:
                    $nova = 6;
                break;
                case 80:
                    $nova = 8;
                break;
                case 100:
                    $nova = 10;
                break;
            }
            $this->filme->setAvaliacao($nova);
        }

        public function setEspectador($e){
            $this->espectador = $e;
        }
        public function getEspectador(){
            return $this->espectador;
        }
        public function setFilme($f){
            $this->filme = $f;
        }
        public function getFilme(){
            return $this->filme;
        }
}
