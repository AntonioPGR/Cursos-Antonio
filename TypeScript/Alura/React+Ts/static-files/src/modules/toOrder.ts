import { Products } from "./products";

export class ToOrderProducts{

  public static orderTo(array:Products[], order:number){
    const arrayCopy = [...array]

    let orderFunction;
    switch(order){
      case 0:
        orderFunction = ToOrderProducts.random
      break;
      case 1:
        orderFunction = ToOrderProducts.higherPrice
      break;
      case 2:
        orderFunction = ToOrderProducts.lowerPrice
      break;
      case 3:
        orderFunction = ToOrderProducts.type
      break;
      default:
        return arrayCopy
    }

    arrayCopy.sort(orderFunction)
    return arrayCopy

  }

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

  private static type(a:Products, b:Products):number{
    const categoryA = a.category.id
    const categoryB = b.category.id

    if(categoryA === categoryB){
      return 0
    }

    return categoryA > categoryB? 1 : -1

  }

}