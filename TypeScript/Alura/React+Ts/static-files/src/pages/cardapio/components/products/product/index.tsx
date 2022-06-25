import { Products } from "modules/products"
import Logo from "assets/imgs/cpu1.jpg";
import styles from "./product.module.scss";

interface PropsProduct{
  productInfo: Products
}

export function Product({productInfo}:PropsProduct){
  return(
    <article className={styles.container}>

      <img className={styles.image} src={Logo} alt={`imagem do produto ${productInfo.description}`} />

      <div className={styles.information}>

        <p className={styles.description}>
          {productInfo.description}
        </p>

        {
          productInfo.getFormatedBeforePrice()?
          <div className={styles.before}>
            De <span className={styles.fullPrice}>{productInfo.getFormatedBeforePrice()}</span> por:
          </div> 
          : 
          ""
        }

        <div className={styles.inCash}> 
          <div className={styles.method}>à vista:</div>
          <div className={styles.price}>{productInfo.getFormatedInCashPrice()} </div>
        </div>

        <div className={styles.horizontalBar}>

        </div>

        <div className={styles.intallment}> 
          <div className={styles.price}>{productInfo.getFormatedIntallmentPrice()} </div>
          <div className={styles.eachIntallment}>Em até 12x de {productInfo.getFormatedEachInstallmentPrice()} </div>
        </div>

      </div>

    </article>
  )
}