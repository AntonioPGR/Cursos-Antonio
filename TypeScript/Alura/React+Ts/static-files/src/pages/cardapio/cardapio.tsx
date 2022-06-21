import styles from "./cardapio.module.scss";
import Logo from "assets/logo.png";

export function Cardapio(){
  return (
      <>
        <div className={styles.dark} >
          <img src={Logo} alt="Logo da pichau" />
        </div>
      </>
  );
}