// COMPONENTS:
import { Product } from 'modules/product';
import { ProductContainer } from './product';

// STYLE:
import styles from './products_list.module.scss';

interface PropsProductsList{
  listProducts: Product[] | undefined
}

export function ProductsList({listProducts}:PropsProductsList){
  /**
   * renderiza a lista de produtos passada
   * @returns lista de produtos renderizada de acordo com os filtros
   */
  const renderProducts = () => {
    
    // retorna os elementos renderizados
    return listProducts?.map((value, index)=>{

      return (
        <ProductContainer key={index} productInfo={value} />
      );

    });
  };

  return(
    <main className={styles.container}>
      {
        listProducts? renderProducts() : <div className={styles.warningMessage} >Pelo visto estamos sem nada no estoque... ou será que ocorreu algum erro? </div>
      }
    </main>
  );
}