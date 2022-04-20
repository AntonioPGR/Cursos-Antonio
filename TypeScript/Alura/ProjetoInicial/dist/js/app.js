import { Negociacao } from './models/negociacao.js'

const negocicacao = new Negociacao(new Date(), 4, 10)

console.log(negocicacao)

console.log(negocicacao.volume)