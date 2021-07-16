"use strict"

const ajax = new XMLHttpRequest()
const button = document.querySelector('button#btn')

button.addEventListener('click', ()=>{
    console.log('ok')
    ajax.open("GET", "lista.php", true) // chama o arquivo lista.php através do método post
    ajax.send() // envia um valor para o php caso desejado, neste exemplo não está enviando nenhum valor
    ajax.responseType = 'json'

    // verifica se deu certo a chamada: https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHTTPRequest
    ajax.addEventListener('readystatechange', ()=>{
        if (ajax.readyState === 4 && ajax.status === 200){
        let lista_users = ajax.response
        exibe_usuarios(lista_users)
        }
    })

})

const exibe_usuarios = (lista_users) => {
    let div_users = document.createElement('div')
    let list = document.createElement('ul')

    for (let c = 0; c >= lista_users.lenght; c++){
        let item = document.createElement('li')
        item.appendChild(document.createTextNode(`${lista_users[[c]]}`))
        list.appendChild(item)
    }

    div_users.appendChild(list)
}


