import { Products } from "./products";

export class ToOrderProducts{

  public static orderTo(array:Products[], order:number){
    const arrayCopy = [...array]

    let orderFunction;
    if(order === 0){
      orderFunction = ToOrderProducts.random
    }
    else if(order === 1){
      orderFunction = ToOrderProducts.higherPrice
    }
    else if(order === 2){
      orderFunction = ToOrderProducts.lowerPrice
    }
    else{
      console.log("Nenhuma opção de ordenação correspondida, retornando array padrão")
      return arrayCopy
    }

    arrayCopy.sort(orderFunction)
    return arrayCopy

  }

  /**
   * Retorna um novo array ordenado em ordem crescente
   * @param Array Array a ser ordenado
   */
  private static higherPrice(a:Products, b:Products):number{
    const priceA = a.price.to
    const priceB = b.price.to

    // a anterior a b
    if(priceA > priceB){
      return -1
    }
    // a posterior a b
    if(priceA < priceB){
      return 1
    }
    // iguais
    return 0
  }

  private static lowerPrice(a:Products, b:Products):number{

    const priceA = a.price.to
    const priceB = b.price.to

    // a anterior a b
    if(priceA < priceB){
      return -1
    }
    // a posterior a b
    if(priceA > priceB){
      return 1
    }
    // iguais
    return 0
  }

  private static random(a:Products, b:Products):number{
    return Math.floor(Math.random() * (2 - (-1)) + (-1))
  }

}