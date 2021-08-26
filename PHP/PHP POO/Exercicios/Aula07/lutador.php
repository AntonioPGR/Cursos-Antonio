<?php

    require_once 'Interface.php';

    class Lutador{
        
        private $nome;
        private $nacionalidade;
        private $idade;
        private $altura;
        private $peso;
        private $categoria;
        private $vitorias;
        private $derrotas;
        private $empates;

        public function __construct($nm, $na, $id, $alt, $ps, $vt, $dt, $em){
            $this->setNome($nm);
            $this->setNacionalidade($na);
            $this->setIdade($id);
            $this->setAltura($alt);
            $this->setPeso($ps);
            $this->setVitorias($vt);
            $this->setDerrotas($dt);
            $this->setEmpates($em);
        }

	    private function getNome(){
		    return $this->nome;
	    }

        private function setNome($nome){
            $this->nome = $nome;
        }

        private function getNacionalidade(){
            return $this->nacionalidade;
        }

        private function setNacionalidade($nacionalidade) {
            $this->nacionalidade = $nacionalidade;
        }

        private function getIdade() {
            return $this->idade;
        }

        private function setIdade($idade) {
            $this->idade = $idade;
        }

        private function getAltura() {
            return $this->altura;
        }

        private function setAltura($altura) {
            $this->altura = $altura;
        }

        private function getPeso() {
            return $this->peso;
        }

        private function setPeso($peso) {
            $this->peso = $peso;
            $this->setCategoria($peso);
        }

        private function getCategoria() {
            return $this->categoria;
        }

        private function setCategoria($peso) {

            if($peso >= 52 && $peso <= 70){
                $this->categoria = "leve";
            }elseif($peso >= 70 && $peso <= 90){
                $this->categoria = "medio";
            }elseif($peso >= 90 && $peso <= 120){
                $this->categoria = "pesado";
            }else{
                $this->categoria = "Peso Invalido";
            }

        }

        private function getVitorias() {
            return $this->vitorias;
        }

        private function setVitorias($vitorias) {
            $this->vitorias = $vitorias;
        }

        private function getDerrotas() {
            return $this->derrotas;
        }

        private function setDerrotas($derrotas){
            $this->derrotas = $derrotas;
        }

        private function getEmpates() {
            return $this->empates;
        }

        private function setEmpates($empates) {
            $this->empates = $empates;
        }


        public function apresentar(){
            echo "<p>----------------------------------------</p>";
            echo "CHEGOU A HORA <br>";
            echo "Vindo diretamente de {$this->getNacionalidade()}<br>";
            echo "tendo {$this->getIdade()} anos, um peso de {$this->getPeso()}kg e uma altura de {$this->getAltura()} <br>";
            echo "Ele é: {$this->getNome()}<br>";
            echo "<p>----------------------------------------</p>";
           
        }

        public function status(){
            echo "<p>----------------------------------------</p>";
            echo "{$this->getNome()} é da categoria dos pesos {$this->getCategoria()} com {$this->getVitorias()} vitorias, {$this->getEmpates()} empates e {$this->getDerrotas()} derrotas <br>";
            echo "<p>----------------------------------------</p>";
        }

        public function ganharLuta(){
            $this->setVitorias($this->getVitorias() + 1);
        }

        public function perderLuta(){
            $this->setDerrotas($this->getDerrotas() + 1);
        }

        public function empatarLuta(){
            $this->setEmpates($this->getEmpates() + 1);
        }
    }