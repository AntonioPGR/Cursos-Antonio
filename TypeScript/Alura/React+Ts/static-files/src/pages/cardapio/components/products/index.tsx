import productsJson from "assets/json/products.json"
import { Products } from "modules/products"
import { useEffect, useState } from "react"
import { Product } from "./product"
import styles from "./products_list.module.scss"


export function ProductsList(){

  const [products, setProducts] = useState<Products[]>([])

  // insere os produtos presentes em productsJson na variavel produto na forma de classe Products
  useEffect(()=>{

    const p = productsJson.map((value)=>{
      return new Products(value.description, value.price, value.id, value.photo, value.category);
    })
    setProducts(p);

  }, [])

  return(
    <main className={styles.container}>
      {
        products.map((value, index)=>{
          return (
            <Product key={index} productInfo={value} />
          )
        })
      }
    </main>
  )
}