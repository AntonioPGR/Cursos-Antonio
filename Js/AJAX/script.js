"use strict"

const ajax = new XMLHttpRequest()
const button = document.querySelector('button#btn')

button.addEventListener('click', ()=>{
    ajax.open("POST", "lista.php", true) // chama o arquivo lista.php através do método post
    ajax.send('escolha=2') // envia um valor para o php caso desejado, neste exemplo não está enviando nenhum valor
    ajax.responseType = 'json'

    // verifica se deu certo a chamada: https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHTTPRequest
    ajax.addEventListener('readystatechange', ()=>{
        if (ajax.readyState === 4 && ajax.status === 200){
        let lista_users = ajax.response
        console.log(lista_users)
        exibe_usuarios(lista_users)
        }
    })

})

const exibe_usuarios = (lista_users) => {
    let div_users = document.createElement('div')
    let list = document.createElement('ul')

    lista_users.map((value)=>{
        let list_item = document.createElement('li')
        list_item.textContent = value
        list.appendChild(list_item)
    });

    div_users.appendChild(list)
    document.body.appendChild(div_users)
}


