// Components
import { Header } from "components/header";
import { SearchBar } from "./components/searchBar";
import { FiltersBar } from "./components/filtersBar";

// Imports
import { useState } from "react";
import { Filter } from "modules/filters";
import { OrderTag } from "modules/orderBy";
import { ProductsList } from "./components/products";

export function Cardapio(){
  // armazena a string de busca inserida na barra de pesquisa
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [currentFilter, setCurrentFilter] = useState<Filter>()
  const [order, setOrder] = useState<OrderTag>()

  return (
      <>
        <Header />
        <SearchBar onChange={setSearchQuery}/>
        <FiltersBar onSelectFilter={setCurrentFilter} onChangeOrderBy={setOrder} />
        <ProductsList category={currentFilter} orderBy={order} search={searchQuery} />
      </>
  );
}