// STYLE
import styles from './header.module.scss';

// ASSETS
import Logo from 'assets/imgs/logo.png';

// DATA
import pagesLink from 'data/pages.json';
import { Link } from 'react-router-dom';

export function Header(){
  return(
    <header className={styles.container} >
      <div className={styles.logoContainer}>
        <Link to={'/'}><img alt="Logo da pichau" src={Logo} className={styles.logo} /></Link>
      </div>
      <nav className={styles.navMenu}>
        {
          pagesLink.map((value, index)=>{
            return (
              <Link className={styles.menuLink} key={index} to={value.to} >
                {value.label}
              </Link>
            );
          })
        }
      </nav>
    </header>
  );
}