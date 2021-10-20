const info = document.querySelector('p#info')
info.addEventListener('click', ()=>{
    const ajax = new XMLHttpRequest()

    ajax.onload = () => {
        console.log(ajax)
        info.innerHTML = ajax.responseText

    }
    ajax.open('POST', 'texto.txt')
    ajax.send()
    ajax.responseType = 'text'
})