// Components
import { Header } from "components/header";
import { SearchBar } from "./components/searchBar";
import { FiltersBar } from "./components/filtersBar";

// Imports
import { useEffect, useState } from "react";
import { Filter } from "modules/filters";
import { OrderTag } from "modules/orderBy";

export function Cardapio(){
  // armazena a string de busca inserida na barra de pesquisa
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [currentFilter, setCurrentFilter] = useState<Filter | undefined>(undefined)
  const [order, setOrder] = useState<OrderTag>()

  // useEffect(()=>console.log(currentFilter), [currentFilter])
  // useEffect(()=>console.log(order), [order])
  // useEffect(()=>console.log(searchQuery), [searchQuery])

  return (
      <>
        <Header />
        <SearchBar onChange={setSearchQuery}/>
        <FiltersBar onSelectFilter={setCurrentFilter} onChangeOrderBy={setOrder} />
      </>
  );
}