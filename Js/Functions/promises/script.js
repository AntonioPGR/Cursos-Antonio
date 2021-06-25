// function sumnumbers(){
//     let soma = 1+1

//     if (soma == 2){
//         sucessSum()
//     } else{
//         errorSum()
//     }
// }
// function sucessSum(){
//     console.log('Oh, the result is 2')
// }
// function errorSum(){
//     console.log('oh, I broke the math')
// }
// sumnumbers() 

let p = new Promise((accept, reject) => {
    let a = 1+1
    if (a == 2){
        accept('correct')
    }else{
        reject('incorrect')
    }
})

p.then(msg => {
    console.log('the sum is ' + msg)
}).catch(msg => {
    console.log('Ow ow, something is wrong')
})