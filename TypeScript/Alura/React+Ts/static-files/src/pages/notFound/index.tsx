import { Link } from 'react-router-dom';
import styles from './notFound.module.scss';
import notFoundImage from 'assets/imgs/error404.png';

export function NotFound(){
  return(
    <div className={styles.notFoundContainer}>
      <div className={styles.errorMsg} >
        <h1 className={styles.text}>404</h1>
        <h2 className={styles.text}>Pagina não encontrada</h2>
        <p className={styles.text}>A página que você procura não existe ou não está disponível no momento.</p>
        <Link to="/" className={styles.backToHub}>
          Ir para pagina principal
        </Link>
      </div>
      <div className={styles.errorImage} >
        <img src={notFoundImage} alt="imagem correspondente ao erro de página não encontrada" />
      </div>
    </div>
  );
}