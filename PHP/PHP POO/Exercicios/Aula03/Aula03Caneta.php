<?php

class Caneta {
        public $modelo;
        public $cor;
        private $ponta;
        private $carga;
        protected $tampada;
    
    public function rabiscar(){

        if($this->tampada == true){
            echo "destampe a caneta primeiro <br>";
        }else{
            echo "estou rabiscando...<br>";
        }

    }

    public function tampar(){
        $this->tampada = true;  
    }

    public function destampar(){
        $this->tampada = false;    
    }

    public function recarregar(){
        $this->carga = 100;
    }
}
?>