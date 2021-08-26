<?php

    class ContaBanco{
        public $numConta;
        protected $tipo;
        private $dono;
        private $saldo;
        private $status;

        public function __construct(){
            $this->saldo = 0;
            $this->status = false;    
        }

        function abrirConta($t){   
            $this->setTipo($t);
            $this->setStatus(True);

            if( $this->getTipo() == "cc"){
                $this->setSaldo(50);
            }elseif( $this->getTipo() == "cp"){
                $this->setSaldo(150);
            }

        }


        function fecharConta(){
            
            if($this->getSaldo() < 0){
                echo "<br>Você não pode fechar a conta pois esta em debito com o banco <br>";
            }elseif($this->getSaldo() > 0){
                echo "<br>Para fechar sua conta saque o dinheiro restante nela";
            }else{
                $this->setStatus(false);
                echo "<br>Conta de {$this->getDono()} fechada com sucesso";
            }
            
        }


        function depositar($v){
            if($this->getStaus() == 1){
                $this->setSaldo( $this->getSaldo() + $v);
                echo "<br>Deposito de $v autorizado na conta de {$this->getDono()}";
            }else{
                echo "<br>Abra sua conta primeiro";
            }
        }

        function sacar($sq){
            if($this->getSaldo() >= $sq){
                $this->setSaldo($this->getSaldo() - $sq);
                echo "<br>Saque de $sq autorizado na conta de {$this->getDono()}";
            }else{
                echo "você não tem dinheiro suficiente";
            }
        }

        function pagMensal(){
            if($this->getTipo() == "cc"){
                $this->setSaldo($this->getSaldo() - 12);
                echo "<br>Pagamento da mensalidade de R$12 efetuado na conta de {$this->getDono()}";
            }else{
                $this->setSaldo($this->getSaldo() - 20);
                echo "<br>Pagamento da mensalidade de R$20 efetuado na conta de {$this->getDono()}";
            }
        }

        //-----------------------------------------

        function getNumConta(){
            return $this->numConta;
        }
        function setNumConta($nc){
            $this->numConta = $nc;
        }

        function getTipo(){
            return $this->tipo;
        }
        function setTipo($t){
            $this->tipo = $t;
        }

        function getDono(){
            return $this->dono;
        }
        function setDono($d){
            $this->dono = $d;
        }

        function getSaldo(){
            return $this->saldo;
        }
        function setSaldo($s){
            $this->saldo = $s;
        }

        function getStaus(){
            return $this->status;
        }
        function setStatus($st){
            $this->status = $st;
        }
    }

?>