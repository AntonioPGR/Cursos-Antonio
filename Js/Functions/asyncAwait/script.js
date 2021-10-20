"use strict"

console.log('inicio')

// Promise normal

// let novapromessa = new Promise((entao, erro) => {
//     try{
//         let p = document.getElementById('p')
//         p.innerHTML = 'ok'
//         entao('Deu certo')
//     } catch {
//         erro('oh! something wrongs')
//     }
// }).then((value)=>{
//     console.log(value)
// }).catch((value)=>{
//     console.log(value)
// })

// Thens aninhados

function dados(dados, error=false){
    return new Promise((correct, erro) => {
        console.log('Recebendo dados...');
        if (error){
            erro('Oh! something wrongs')
        } else {
            dados = dados.toLowerCase()
            correct(dados)
        } 
    })
}

function tratar_dados(dados, error=false){
    return new Promise((resolve, reject)=>{
        console.log(`dados recebidos: ${dados}`)
        try{
            dados = dados.split(';')
            resolve(dados)
        } catch{
            reject('Oh! something wrongs')
        }
    })
}
// .then((dados) => {
//     console.log(`Dados recebidos: ${dados}`)
//     dados = dados.toLowerCase()
//     console.log(`Dados enviados: ${dados}`)
//     return dados
// })
// .then((dados)=>{
//     console.log(`Dados recebidos: ${dados}`)
//     dados = dados.split(';')
//     console.log(`Dados enviados: ${dados}`)
//     return dados
// })
// .then((dados)=>{
//     console.log(`Resultado Final: ${dados}`)
// })
// .catch((msg)=>{
//     console.log(msg)
// });

async function recebe_dados(){
    const received = await dados('Antonio 01; Luciana 02; Edson 03')
    console.log(received)
    const dados_finais = await tratar_dados(received)
    console.log(`dados finais: ${dados_finais}`)
}

recebe_dados()

console.log('fim')