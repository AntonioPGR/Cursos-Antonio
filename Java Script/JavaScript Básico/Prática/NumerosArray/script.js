let valores = []
let num = document.querySelector('input#num')
let div_resposta = document.querySelector('div#resposta')
let lista = document.querySelector('select#slct')

function verificar_num(n, l){
    if (l.indexOf(Number(n)) != -1){
        window.alert('O numero já foi adicionado')
        return false
    } else if (n == ''){
        window.alert('Insira o valor do numero antes')
        return false
    } else{
        return true
    }
}

function adicionar(){
    if (verificar_num( num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)
        num.value = ''
    }
}

function finalizar(){
    valores.sort()
    let soma = 0
    let multi = 1
    valores.map(val=>soma+=val)
    valores.map(val=>multi*=val)

    div_resposta.innerHTML = `<p id="p_resposta"> Os valores informados são ${valores} <br> O maior valor é ${valores[valores.length-1]} e o menor é ${valores[0]} <br> A soma dos valores é ${soma} <br> A multiplicação dos valores é ${multi}</p>`
}
