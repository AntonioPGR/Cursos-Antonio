const cep = document.querySelector('#cep')

cep.addEventListener('blur', (e)=>{
    let search = cep.value.replace('-', '')
    const options = {
        method: 'GET',
        mofr: 'cors',
        chace: 'default',
    }

    
    .then(response=>{
        response.json()
        .then( datafetch(`https://viacep.com.br/ws/${cep}/json/`, options) =>{
            console.log(data)
        })
    })
    .catch((erro)=>{
        console.log(erro.message)
    })
})