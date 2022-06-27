import styles from './header.module.scss';
import Logo from 'assets/imgs/logo.png';

export function Header(){
  return(
    <header className={styles.container} >
      <div className={styles.logoContainer}>
        <img alt="Logo da pichau" src={Logo} className={styles.logo} />
      </div>
    </header>
  );
}