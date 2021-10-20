const div = document.querySelector('div#conteudo')
document.querySelector('button#bt').addEventListener('click', () => {
    console.log('ola')
    const ajax = new XMLHttpRequest()

    ajax.onload = () => {
        if (ajax.status === 200 && ajax.readyState === 4){
            console.log(ajax)
            div.innerHTML = ajax.responseText
        }
    }

    ajax.open('GET', 'index.php?op=1')
    ajax.send()
})