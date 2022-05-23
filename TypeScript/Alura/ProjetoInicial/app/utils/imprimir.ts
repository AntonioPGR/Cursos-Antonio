import { Imprimivel } from "./imprimivel.js"


export function imprimir(...objetos : Imprimivel[]){

  objetos.map((objeto) => {
    console.log(objeto.paraTexto())
  })

}