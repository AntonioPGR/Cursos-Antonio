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

let dados = 'Antonio 01; José 02; Maria 03'
let error;
let p = new Promise((correct, erro) => {
    console.log('Recebendo dados...');
    setTimeout(()=>{
        if (error){
            erro('Oh! something wrongs')
        } else {
            correct(dados)
        }
    }, 3000) 
})
.then((dados) => {
    console.log(`Dados recebidos: ${dados}`)
    dados = dados.toLowerCase()
    console.log(`Dados enviados: ${dados}`)
    return dados
})
.then((dados)=>{
    console.log(`Dados recebidos: ${dados}`)
    dados = dados.split(';')
    console.log(`Dados enviados: ${dados}`)
    return dados
})
.then((dados)=>{
    console.log(`Resultado Final: ${dados}`)
})
.catch((msg)=>{
    console.log(msg)
});
 
console.log('fim')