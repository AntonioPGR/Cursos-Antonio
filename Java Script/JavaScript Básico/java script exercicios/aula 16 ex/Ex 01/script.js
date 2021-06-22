var lista = document.getElementById('slct')
var num = document.getElementById('num')
let res = document.getElementById('res')
let valores = []
var item = document.createElement('option')
function adicionar(){
    if(num.value > 100 || num.value <= 0){
        window.alert('verifique os dados e tente novamente. E lembre-se que os numeros só podem ir de 1 a 100')
    }else{
        if( valores.indexOf(Number(num.value)) != -1){
        window.alert('verifique os dados e tente novamente. E lembre-se que os numeros não podem ser repetidos')
    }else
        var add = adicionar()
    }
    function adicionar(){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `O numero ${num.value} foi adicionado `
        lista.appendChild(item)
    }
    num.value = ''
    num.focus()
}

function verificar(){
    //quantos numeros
    valores.sort
    res.innerHTML = `os numeros adicionados são: ${valores.sort()} <br>`
    //numeros de casas
    let ncasas = valores.length
    res.innerHTML += `ao todo temos ${ncasas} numeros <br>`
    //maior e menor valor
    let mn = ncasas - 1
    res.innerHTML += `o maior valor informado é ${valores[mn]} <br>`
    res.innerHTML += `o menor valor informado é ${valores[0]} <br>`
    //soma
    let soma = 0
    for( let pos in valores){
        soma += valores[pos]
    }
    res.innerHTML += `a soma dos valores é ${soma} <br>`
    //divisao
    res.innerHTML += `a media dos valores é: ${soma/ncasas}`

}