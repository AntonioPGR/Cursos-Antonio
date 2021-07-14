"use strict"

const ajax = new XMLHttpRequest()

ajax.open("GET", "lista.php", true) // chama o arquivo lista.php através do método post
ajax.send() // envia um valor para o php caso desejado, neste exemplo não está enviando nenhum valor
ajax.responseType = 'json'


// verifica se deu certo a chamada: https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHTTPRequest
ajax.addEventListener('readystatechange', ()=>{
    if (ajax.readyState === 4 && ajax.status === 200){
        console.log(ajax)
        console.log(ajax.response)
    }
})