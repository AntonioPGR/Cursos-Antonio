const ajax = new XMLHttpRequest()

ajax.onload = () => {
    const div = document.createElement('div')

    const title = document.createElement('h2')
    title.textContent = 'Resposta do servidor:'

    const p = document.createElement('p')
    p.setAttribute('id', 'resposta')
    p.textContent = this.responseText

    console.log(ajax.response)
}

ajax.open("POST", 'index.php', false)
ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
ajax.send('option=2&name=Antonio')

