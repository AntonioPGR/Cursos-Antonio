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
  orderBy: OrderTag | undefined,
  search: string
}

export function ProductsList({category, orderBy, search}:PropsProductsList){

  const [products, setProducts] = useState<Products[]>([])

  /*
    * filtra o array perante o filtro passado
  */
  const filterProducts = (toFilterProducts:Products[]) : Products[] => {
    // caso não haja categoria, não filtra o array
    if(!category){
      return toFilterProducts;
    }

    const filteredProducts = toFilterProducts.filter((value)=>{
      return value.getCategoryId() === category.id
    })
    return filteredProducts

  }

  /*
    * ordena o array de produtos perante a ordem passada
  */
  const sortProducts = (toSortProducts:Products[]) => {
    if(orderBy){
      const sortedProducts = ToOrderProducts.orderTo(toSortProducts, orderBy.id)
      return sortedProducts
    }
    return toSortProducts
  }

  /*
    * pesquisa no array perante a query passada
  */
  const searchProducts = (toSearchProducts:Products[]) : Products[] => {
    if(!search){
      return toSearchProducts
    }

    const searchedProducts = toSearchProducts.filter((value)=>{
      if(value.description.includes(search)){
        return true
      }
      if(value.getCategoryLabel().includes(search)){
        return true
      }
      return false
    })

    return searchedProducts

  }

  /**
   * renderiza a lista de acordo com os filtros
   * @returns lista de produtos renderizada de acordo com os filtros
   */
  const renderProducts = () => {

    const filteredArray = filterProducts(products);
    const orderedArray = sortProducts(filteredArray);
    const searchedArray = searchProducts(orderedArray)
    
    // retorna os elementos renderizados
    return searchedArray.map((value, index)=>{

      return (
        <Product key={index} productInfo={value} />
      )

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