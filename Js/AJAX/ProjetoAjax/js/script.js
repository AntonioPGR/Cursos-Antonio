document.querySelector('button#bt_enviar').addEventListener('click', () => {
    const nome = document.querySelector('input#input_nome').value
    const comentario = document.querySelector('textarea#input_comentario').value

    document.querySelector('input#input_nome').value = ''
    document.querySelector('textarea#input_comentario').value = ''
    
    const ajax = new XMLHttpRequest()
    ajax.open('POST', 'php/index.php', true)
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    ajax.send(`name=${nome}&comment=${comentario}`)

    ajax.onreadystatechange = () => {
        if (ajax.status == 200 && ajax.readyState == 4){
            const comments = ajax.response
            const lista_comments = document.querySelector('ul#lista_comentarios')

            comments.map((value, index)=>{
                let li = document.createElement('li')
                if (index%2 == 0){
                    li.setAttribute('id', 'gray')
                } else {
                    li.setAttribute('id', 'white')
                }

                let nome = document.createElement('p')
                nome.setAttribute('id', 'nome')
                nome.textContent = value[0]

                let comentario = document.createElement('p')
                comentario.setAttribute('id', 'comentario')
                comentario.textContent = value[1]

                li.appendChild(nome)
                li.appendChild(comentario)

                lista_comments.appendChild(li)
            })

        }
    }
})