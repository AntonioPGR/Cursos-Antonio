<?php

    class Burrico{

        var $cor;
        var $peso;
        var $tamanho;
        var $dinheiro;
        var $quantidade;
    

    function quantidade(){

        if($this->dinheiro < 100){
            $this->quantidade = "quase nada";
        }elseif($this->dinheiro >= 100 & $this->dinheiro < 200){
            $this->quantidade = "metade";
        }else{
            $this->quantidade = "cheio";
        }

        echo ($this->quantidade);
    }

}
?>