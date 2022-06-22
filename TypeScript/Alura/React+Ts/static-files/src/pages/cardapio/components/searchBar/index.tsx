import styles from "./searchBar.module.scss";
import { ReactComponent as Lupa } from "assets/lupa.svg"

export function SearchBar(){
  return (
    <form className={styles.container}>
      <input 
      type="text" 
      name="search" 
      id="search" 
      placeholder="Procurando por algo?"
      autoComplete="off"
      className={styles.input} />
      <Lupa className={styles.image} />
    </form>
  )
}