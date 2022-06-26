import productsJson from "assets/json/products.json"
import { Filter } from "modules/filters"
import { OrderTag } from "modules/orderBy"
import { Products } from "modules/products"
import { ToOrderProducts } from "modules/toOrder"
import { useEffect, useState } from "react"
import { Product } from "./product"
import styles from "./products_list.module.scss"

interface PropsProductsList{
  category: Filter | undefined,
  orderBy: OrderTag | undefined
}

export function ProductsList({category, orderBy}:PropsProductsList){

  const [products, setProducts] = useState<Products[]>([])

  /*
    * Verifica se o produto é valido perante os filtros passados
  */
  const isProductAvaible = (product:Products) => {
    // caso não haja categoria selecionada libera o produto
    if(!category){
      return true
    }
    // caso o id da categoria do produto seja igual o da categoria selecionada libera o produto
    if(product.getCategoryId() === category?.id){
      return true
    }
    // se não seguir nenhuma das condições bloqueia o produto de aparecer
    return false
  }

  /*
    * ordena o array de produtos
  */
  const sortProducts = () => {
    if(orderBy){
      const sortedProducts = ToOrderProducts.orderTo(products, orderBy.id)
      return sortedProducts
    }
    return products
  }

  /**
   * renderiza a lista de acordo com os filtros
   * @returns lista de produtos renderizada de acordo com os filtros
   */
  const renderProducts = () => {

    const orderedArray = sortProducts();
    
    // retorna os elementos renderizados
    return orderedArray.map((value, index)=>{

      if(isProductAvaible(value)){
        return (
          <Product key={index} productInfo={value} />
        )
      }
      return

    })
  }

  /* 
    * insere os produtos presentes em productsJson na variavel produto na forma de classe Products e prdena-os
  */
  useEffect(()=>{

    const p = productsJson.map((value)=>{
      return new Products(value.description, value.price, value.id, value.photo, value.category);
    })
    setProducts(p);

  }, [])

  return(
    <main className={styles.container}>
      {
        renderProducts()
      }
    </main>
  )
}