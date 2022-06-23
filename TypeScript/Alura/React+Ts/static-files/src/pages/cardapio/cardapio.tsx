// Components
import { Header } from "components/header";
import { SearchBar } from "./components/searchBar";
import { Filters } from "./components/filters";

// Imports
import { useEffect, useState } from "react";
import { Filter } from "modules/filters";

export function Cardapio(){
  // armazena a string de busca inserida na barra de pesquisa
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [currentFilter, setCurrentFilter] = useState<Filter>()

  return (
      <>
        <Header />
        <SearchBar onChange={setSearchQuery}/>
        <Filters onSelect={setCurrentFilter} />
      </>
  );
}