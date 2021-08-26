<?php
    require_once 'pessoa.php';

    class Aluno extends Pessoa{
        private $mart;
        private $curso;

	public function getMart() {
		return $this->mart;
	}

	public function setMart($mart) {
		$this->mart = $mart;
	}

	public function getCurso() {
		return $this->curso;
	}

	public function setCurso($curso) {
		$this->curso = $curso;
    }
    
    function cancelMart(){
            $this->mart = false;
        }
}