<?php
    require_once 'Leitor.php';
    require_once 'publicacao.php';

    class Livro{

        private $titulo;
        private $autor;
        private $totPaginas;
        private $pagAtual;
        private $aberto;
        private $leitor;

        public function __construct($tit, $aut, $tpag, $leitor){
            $this->titulo = $tit;
            $this->autor = $aut;
            $this->totPaginas = $tpag;
            $this->leitor = $leitor->getNome();
            $this->pagAtual = 0;
            $this->aberto = false;
        }

        public function getTitulo() {
            return $this->titulo;
        }

        public function setTitulo($titulo) {
            $this->titulo = titulo;
        }

        public function getAutor() {
            return $this->autor;
        }

        public function setAutor($autor) {
            $this->autor = $autor;
        }

        public function getTotPaginas() {
            return $this->totPaginas;
        }

        public function setTotPaginas($totPaginas) {
            $this->totPaginas = $totPaginas;
        }

        public function getPagAtual() {
            return $this->pagAtual;
        }

        public function setPagAtual($pagAtual) {
            $this->pagAtual = $pagAtual;
        }

        public function getAberto() {
            return $this->aberto;
        }

        public function setAberto($aberto) {
            $this->aberto = $aberto;
        }

	    public function getLeitor() {
		    return $this->leitor;
	    }

	    public function setLeitor($leitor) {
		    $this->leitor = leitor;
	    }

        #------------------------------------------

        public function detalhesDoLivro(){
            echo "O livro se chama: {$this->getTitulo()}<br>
                  Foi criado pelo autor: {$this->getAutor()}<br>
                  E tem um total de {$this->getTotPaginas()} paginas. <br>";
        }

        public function detalhesDoLeitor($p){
            echo "O leitor(a) se chama: {$p->getNome()}<br>
                  tem {$p->getIdade()} anos <br>
                  ele é do sexo: {$p->getSexo()}<br>
                  e atualmente ele esta na pag {$this->getPagAtual()} de um livro chamado {$this->getTitulo()}<br>
                  ";
        }

        public function abrir(){
            $this->aberto = true;
        }

        public function fechar(){
            $this->aberto= false;
        }

        public function folhear($pag){

            if($this->aberto){
                $this->setPagAtual($pag);
            }else{
                echo "Para folhear voce deve abrir o livro primeiro.<br>";
            }
        
        }

        public function avancarPag(){
            if($this->getAberto() && $this->getPagAtual() + 1 <= $this->getTotPaginas()){
                $this->setPagAtual($this->getPagAtual() + 1);
            }else{
                echo "Não se pode realizar a ação no mometo.<br>";
            }
        }

        public function voltarPag(){
            if($this->getAberto() && $this->getPagAtual() > 0){
                $this->setPagAtual($this->getPagAtual() - 1);
            }else{
                echo "Não se pode realizar a ação no mometo.<br>";
            }
        }
    }