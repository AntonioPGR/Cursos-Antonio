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
    
    function pagarMensalidade(){
			if($this->getMart()){
				echo "Mensalidade de R$500 do aluno {$this->nome} Paga <br>";
			}else{
				echo "Você não esta matriculada para pagar a matricula <br>";
			}
        }
}

#------------------------------------------------------------------------

	class Bolsista extends Aluno{

		private $bolsa;

		function getBolsa(){
			return $this->bolsa;
		}
		function setBolsa($b){
			$this->bolsa = $b;
		}

		public function renovarBolsa(){
			echo "Bolsa de {$this->getBolsa()}% renovada com sucesso";

		}

		public function pagarMensalidade(){
			$desconto = $this->getBolsa() / 100 * 500;
			$tot = 500 - $desconto;
			echo "A mensalidade de {$this->getNome()} foi paga com {$this->getBolsa()}% de desconto totalizando R$$tot";
		}
}

#------------------------------------------------------------------------

	class Tecnico extends Aluno{

		protected $regProf;

		public function getRegProf() {
			return $this->regProf;
		}

		public function setRegProf($regProf) {
			$this->regProf = $regProf;
		}

		public function praticar(){
			echo "O {$this->getNome()} esta praticando a matéria {$this->getRegProf()}";
		}	
		
	}