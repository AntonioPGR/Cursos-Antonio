<?php
    require_once 'interfaceVideo.php';

    class Video implements AcoesVideo{
        private $titulo;
        private $avaliacao;
        private $views;
        private $likes;
        private $reproduzindo;

		public function Video($t){
			$this->setTitulo($t);
			$this->setAvaliacao(1);
			$this->setViews(0);
			$this->setLikes(0);
			$this->setReproduzindo(false);
		}

		public function getTitulo() {
			return $this->titulo;
		}

		public function setTitulo($titulo) {
			$this->titulo = $titulo;
		}

		public function getAvaliacao() {
			return $this->avaliacao;
		}

		public function setAvaliacao($avaliacao) {
			$media = ($this->avaliaçao + $avaliacao) / $this->getViews()
			$this->avaliacao = $media;
		}

		public function getViews() {
			return $this->views;
		}

		public function setViews($views) {
			$this->views = $views;
		}

		public function getLikes() {
			return $this->likes;
		}

		public function setLikes($likes) {
			$this->likes = $likes;
		}

		public function getReproduzindo() {
			return $this->reproduzindo;
		}

		public function setReproduzindo($reproduzindo) {
			$this->reproduzindo = $reproduzindo;
		}

		public function play(){
			$this->setReproduzindo(true);
			$this->setViews($this->getViews() + 1);
		}

		public function pause(){
			$this->setReproduzindo(false);
		}

		public function like(){
			$this->setLikes($this->getLikes() + 1);
		}

}