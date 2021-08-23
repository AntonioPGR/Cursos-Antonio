<?php
    require_once 'livro.php';
    require_once 'publicacao.php';
    class Leitor{

        private $nome;
        private $idade;
        private $sexo;

	public function getNome() {
		return $this->nome;
	}

	private function setNome($nome) {
		$this->nome = $nome;
	}

	public function getIdade() {
		return $this->idade;
	}

	private function setIdade($idade) {
		$this->idade = $idade;
	}

	public function getSexo() {
		return $this->sexo;
	}

	private function setSexo($sexo) {
		$this->sexo = $sexo;
	}

    //----------------------------------------------

    public function __construct($n, $idd, $sx){
        $this->setNome($n);
        $this->setIdade($idd);
        $this->setSexo($sx);
    }

    public function fazerAniversario(){
        $this->setIdade($this->getIdade() + 1);
    }
}