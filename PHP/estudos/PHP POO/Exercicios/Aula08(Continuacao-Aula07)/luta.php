<?php
    require_once 'lutador.php';
    class Luta{

        private $desafiado;
        private $desafiante;
        private $rounds;
        private $aprovada;

	public function getDesafiado() {
		return $this->desafiado;
	}

	public function setDesafiado($desafiado) {
		$this->desafiado = $desafiado;
	}

	public function getDesafiante() {
		return $this->desafiante;
	}

	public function setDesafiante( $desafiante) {
		$this->desafiante = $desafiante;
	}

	public function getRounds() {
		return $this->rounds;
	}

	public function setRounds($rounds) {
		$this->rounds = $rounds;
	}

	public function getAprovada() {
		return $this->aprovada;
	}

	public function Aprovada($aprovada) {
		$this->aprovada = $aprovada;
	}


        public function marcarLuta($l1, $l2){

            if($l1->getCategoria() === $l2->getCategoria() && $l1 != $l2){
                $this->aprovada = true;
                $this->desafiado = $l1;
                $this->desafiante = $l2;
            }else{
                $this->aprovada = false;
                $this->desafiante = null;
                $this->desafiado = null;
            }
            
        }

        public function lutar(){

            if($this->aprovada){
                $this->desafiado->apresentar();
                $this->desafiante->apresentar();
                $vencedor = rand(0,2);
                switch($vencedor){
                    case 0:
                        echo "<p>Empate</p>";
                        $this->desafiante->empatarLuta();
                        $this->desafiado->empatarLuta();
                    break;
                    case 1:
                        echo "<p>O {$this->desafiado->getNome()} ganhou </p>";
                        $this->desafiante->perderLuta();
                        $this->desafiado->ganharLuta();
                    break;
                    case 2:
                        echo "<p>O {$this->desafiante->getNome()} ganhou </p>";
                        $this->desafiante->ganharLuta();
                        $this->desafiado->perderLuta();
                    break;
                }
            }else{
                echo "<p>A luta Não pode acontecer</p>";
            } 
        }
    }