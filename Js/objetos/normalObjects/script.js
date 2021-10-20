// let pessoa = {
//     nome: 'Antonio',
//     idade: 15,
//     escola: 'Dom bosco',
// }
// let extra = {
//     hobbies: ['programar', 'jogar', 'conversar'],
//     notas: {
//         matematica: 9.5,
//         portugues: 9,
//         ingles: 10,
//     }
// }
// let Antonio = Object.assign({}, pessoa, extra)
// console.log(Antonio)

// let nomeVariavel = 'Estado'
// let Antonio2 = {
//     ...pessoa, 
//     ...extra,
//     ...{
//         sexo:'M',
//         profissao:'Estudante'
//     },
//     [nomeVariavel]: 'Minas Gerais'
// }
// console.log(Antonio2)

let usuarios = [
    {nome:'João', idade:23},
    {nome:'Maria', idade:41},
    {nome:'Luana', idade:35},
]

let usuario = {
    posicao: 0,
    get atual() {
        return usuarios[this.posicao]
    },
    set atual(value){
        this.posicao = value
    },
    get proximo() {
        this.posicao++
        if (this.posicao >= usuarios.length){
            this.posicao = 0
        }
        return usuarios[this.posicao]
    },
    get anterior() {
        this.posicao--
        if (this.posicao <= -1){
            this.posicao = usuarios.length - 1
        return usuarios[this.posicao]
        }
    },
}

usuario.atual = 2
console.log(usuario.atual)