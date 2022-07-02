// COMPONENTS
import { Header } from 'components/header';

// STYLE
import styles from './main.module.scss';

// EXTERNAL
import { Outlet } from 'react-router-dom';

export function DefaultPage(){
  return(
    <>

      <Header />

      <div className={styles.container}>
        <Outlet />
      </div>

    </>
  );
}