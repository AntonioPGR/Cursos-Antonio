// COMPONENTS
import { NotFound } from 'pages/notFound';

// STYLES
import styles from './productPage.module.scss';

// MODULES
import { Product } from 'modules/product';

// DATA
import productsJson from 'data/products.json';

// EXTERNAL
import { useNavigate, useParams } from 'react-router-dom';

export function ProductPage(){
  const productProps = useParams();
  const productId = Number(productProps.id);
  const productJson = productsJson.filter((value)=>{
    return value.id === productId;
  })[0];
  if(!productJson){
    return <NotFound />;
  }

  const product = new Product(
    productJson.description,
    productJson.price,
    productJson.id,
    productJson.photo,
    productJson.category
  );
  const navigate = useNavigate();

  return(
    <div className={styles.container}>
      <div className={styles.backTo} onClick={()=>navigate(-1)} >Voltar</div>
      <div className={styles.mediaContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={'../../' + product.photo} alt={product.description} />
        </div>
        <div className={styles.descriptionContainer}>
          <h1 className={styles.title} > {product.description} </h1>
          <div className={styles.price}>
            <p className={styles.fullPrice} > {product.getFormatedInCashPrice()} </p>
            <p className={styles.intallmentPrice} > {product.getFormatedIntallmentPrice()} parcelado em até 12x </p>
          </div>
          <button className={styles.addToCart} >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}