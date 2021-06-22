function saiu(){
    document.getElementById('imgmenu').src = 'imagens/faleConosco.png'
}

function tecinf(){
    document.getElementById('imgmenu').src = 'imagens/interior.png'
}

function control(){
    document.getElementById('imgmenu').src = 'imagens/controle2.png'
}

function flCnc(){
    document.getElementById('imgmenu').src = 'imagens/faleConosco.png'
}

function ftevd(){
    document.getElementById('imgmenu').src = 'imagens/gameplay.png'
}

function index(){
    document.getElementById('imgmenu').src = 'imagens/fundorecort-xbox.png'
}

//

function calctotal(){
    var quant = Number(document.getElementById('Cquant').value)
    var preço = quant*4000
    document.getElementById('Cvalor').value = preço;
}
