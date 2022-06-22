// import styles from "./cardapio.module.scss";

// Components
import { Header } from "components/header";
import { useState } from "react";
import { SearchBar } from "./components/searchBar";
// import { Footer } from "components/footer";

export function Cardapio(){
  // armazena a string de busca inserida na barra de pesquisa
  const [searchQuery, setSearchQuery] = useState<string>("")

  return (
      <>
        <Header />
        <SearchBar onChange={setSearchQuery}/>
      </>
  );
}