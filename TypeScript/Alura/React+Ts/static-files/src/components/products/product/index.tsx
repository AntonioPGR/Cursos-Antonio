import { Product } from 'modules/product';
import { Link } from 'react-router-dom';
import styles from './product.module.scss';

interface PropsProduct{
  productInfo: Product
}

export function ProductContainer({productInfo}:PropsProduct){
  return(
    <Link to={`/produto/${productInfo.id}`} className={styles.linkContainer}>
      <article className={styles.container}>

        <img className={styles.image} src={productInfo.photo} alt={`imagem do produto ${productInfo.description}`} />

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
              ''
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
    </Link >
  );
}