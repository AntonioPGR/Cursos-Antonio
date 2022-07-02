// STYLE
import styles from './header.module.scss';

// ASSETS
import Logo from 'assets/imgs/logo.png';

// DATA
import pagesLink from 'data/pages.json';

// EXTERNAL
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import classNames from 'classnames';

export function Header(){

  const [isMenuOpen, setMenuState] = useState(true);
  const menu = useRef(null);

  // muda o status do menu
  const changeMenu = () => {
    setMenuState(!isMenuOpen);
  };

  // fecha o menu caso o click não seja no nav
  document.documentElement.onclick = (ev) => {
    if(ev.target !== menu.current){
      setMenuState(false);
    }
  };

  /**
   * renderiza os links do menu de navegação
   * @returns os links em formato jsx
   */
  const renderLinks = () => {
    return pagesLink.map((value, index)=>{

      return (
        <Link className={styles.link} key={index} to={value.to} >
          {value.label}
        </Link>
      );

    });
  };

  return(
    <header className={styles.container} >

      <div className={styles.logoContainer}>
        <Link to={'/'}>
          <img alt="Logo da pichau" src={Logo} className={styles.logo} />
        </Link>
      </div>

      <nav className={styles.navMenu} onClick={changeMenu} >

        
      </nav>
      
    </header>
  );
}