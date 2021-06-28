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

// let error;
// let tratar_dados = new Promise((correct, erro) => {
//     console.log('Recebendo dados...');
//     let dados = 'Antonio 1; Daniel 2; José 3; Ana 4';
//     setTimeout(()=>{
//         if (error){
//             erro('Oh! something wrongs')
//         } else {
//             correct(dados)
//         }
//     }, 3000) 
// }).then((dados) => {
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

// Varias promises juntas

// let ola = new Promise((resolve, reject) => {resolve('ola')})
// let tdBem = new Promise((resolve, reject) =>{resolve('tudo bom?')})
// Promise.all([ola, tdBem])
// .then((values) => console.log(values))
// .catch((values) => console.log('error'))

// corrida entre promises
// let ola = new Promise((resolve, reject) => {setTimeout(()=>{resolve('ola')}, 1000)})
// let tdBem = new Promise((resolve, reject) =>{resolve('tudo bom?')})
// Promise.race([ola, tdBem])
// .then((value)=>console.log(value))
// .catch((value)=>console.log('error'));

console.log('fim')