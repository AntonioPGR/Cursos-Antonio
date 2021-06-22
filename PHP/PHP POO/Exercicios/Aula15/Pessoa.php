<?php

    abstract class Pessoa{

        private $nome;
        private $idade;
        private $sexo;
        private $experiencia;

		public function __construct($n, $i, $s){
			$this->setNome($n);
			$this->setIdade($i);
			$this->setSexo($s);
		}

		public function getNome() {
			return $this->nome;
		}

		public function setNome($nome) {
			$this->nome = $nome;
		}

		public function getIdade() {
			return $this->idade = $idade;
		}

		public function setIdade($idade) {
			$this->idade = $idade;
		}

		public function getSexo() {
			return $this->sexo;
		}

		public function setSexo($sexo) {
			$this->sexo = $sexo;
		}

		public function getExperiencia() {
			return $this->experiencia;
		}

		public function setExperiencia($experiencia) {
			$this->experiencia = $experiencia;
		}

		public function ganharEXP(){
			$this->setExperiencia($this->getExperiencia() + 1);
		}

}