"use strict"

let visor = document.getElementById('visor')
let numeros = document.querySelectorAll('td.num')
let op = document.querySelectorAll('td.operadores')
let clear = document.querySelector('td#clear')
let equal = document.querySelector('td#igual')

let nuns = []
let operacoes = []
let n_atual = ''
let conta_visor = ''

// exibe a operação no visor
let exibir = () => {
    visor.innerHTML = conta_visor
}

// adicionando evento para os botoes de numeros
numeros.forEach(function(conteudo){
    let n = conteudo.textContent
    conteudo.addEventListener('click', function(e){
        n_atual += n
        conta_visor += n
        exibir()
    })
})

// adicionando evento para os botoes de operadores
op.forEach(function(conteudo){
    let op_ = conteudo.textContent
    conteudo.addEventListener('click', function(e){
        // o valor do primeiro alg vai para um array e a op para outro
        conta_visor += op_
        nuns.push(Number(n_atual))
        n_atual = ''
        operacoes.push(op_)
        exibir()
    })
})

// adicionando evento para os botoes de igual e clear
equal.addEventListener('click', function(){
    // adiciona o ultimo numero do array
    nuns.push(Number(n_atual))

    let somar = () => {
        // enquanto não chegar no resultado final nuns[0], ele vai somando ou subtraindo, dependendo de operacoes[0]
        while (nuns.length > 1){
            if (operacoes[0] == '+'){
                nuns[0] += nuns[1]
            }else{
                nuns[0] -= nuns[1]
            }
            operacoes.splice(0, 1)
            nuns.splice(1, 1)
        }
        n_atual = `${nuns[0]}`
        conta_visor = n_atual
        nuns = []
        operacoes = []
        exibir()
    }

    // se não tiver x ou / no array ele executa dessa forma
    if (operacoes.indexOf('÷') == -1 && operacoes.indexOf('×') == -1){
        somar()
    // agora, se houver x ou /, executa dessa:
    }else{
        while(operacoes.indexOf('÷') != -1 || operacoes.indexOf('×') != -1){
            let index_x = operacoes.indexOf('×')
            let index_d = operacoes.indexOf('÷')

            if (index_x != -1 && index_x < index_d  || index_d == -1){
                nuns[index_x] *= nuns[index_x+1]
                operacoes.splice(index_x, 1)
                nuns.splice(index_x+1, 1)
            }else{
                nuns[index_d] /= nuns[index_d+1]
                operacoes.splice(index_d, 1)
                nuns.splice(index_d+1, 1)
            }
        }
        somar()
    }
})

clear.addEventListener('click', function(){
    conta_visor = ''
    n_atual = ''
    nuns = []
    operacoes = []
    exibir()
})
