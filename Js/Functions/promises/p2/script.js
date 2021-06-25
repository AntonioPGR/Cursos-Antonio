const fs = require('fs')
const arquivo = './teste.txt'

// Forma Sincrona
// let texto = fs.readFileSync(arquivo)

// CallBack
let texto = fs.readFile(arquivo, (error, texto) =>{
    if (error){
        console.log(error)
    }else{
        console.log(texto)
    }
})