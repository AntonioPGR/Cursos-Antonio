const cep = document.querySelector('#cep')

cep.addEventListener('keyup', (e)=>{
    if (cep.value.length == 5 && e.keyCode != 8){
        cep.value += '-'
    }
})

cep.addEventListener('blur', (e)=>{
    let search = cep.value.replace('-', '')
    if (search.length != 8){
        return
    }

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response=>{
        response.json().then(data=>{
            document.querySelector('input#logradouro').value = data.logradouro
            document.querySelector('input#bairro').value = data.bairro
            document.querySelector('input#localidade').value = data.localidade
            document.querySelector('input#uf').value = data.uf
        })
        .catch(erro=>{
            console.log(erro.message)
        })
    })
    .catch((erro)=>{
        console.log(erro.message)
    })
})