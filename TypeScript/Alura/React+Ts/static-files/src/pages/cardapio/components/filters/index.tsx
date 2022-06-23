import preSetFilters from "assets/json/filters.json"
import styles from "./filters.module.scss";
import { Filter } from "modules/filters"
import { ChangeEvent } from "react";

// OBS: para o estilo usei o checkbox, porém existe um módulo chamado ClassNames que pode ser usado para concaternar classes do css modules

interface PropsFilters{
  onSelect: (filter:Filter | undefined) => void,
}

export function Filters({ onSelect }:PropsFilters){
  const filters = preSetFilters.map((value)=>{
    return new Filter(value.name, value.id) 
  })

  /*
    * Desmarca as outras opções caso não seja a selecionada 
  */
  const uncheckOthersOptions = (selectedOption:Filter) => {

    const nodeListInputs = document.getElementsByName("filter") 
    const inputs : HTMLInputElement[] = Array.prototype.slice.call(nodeListInputs);

    inputs.map((prevCheckBox) => {

      if(prevCheckBox.id !== String(selectedOption.id) && prevCheckBox.checked){
        prevCheckBox.checked = false;
      }

    })

  }

  const handleSelect = (ev:ChangeEvent<HTMLInputElement>, selectedFilter:Filter) => {
    if(ev.target.checked){
      uncheckOthersOptions(selectedFilter);
      onSelect(selectedFilter)
    } else {
      onSelect(undefined)
    }
  }

  /*
    * @returns uma div para cada elemento contido em filters
  */
  const renderFilters = () => {
    return filters.map((filter, index) => {
      return(
        <li key={index} className={styles.filter} >
          <input 
            type="checkbox" 
            name="filter" 
            id={`${filter.id}`} 
            className={styles.checkBox} 
            onChange={(ev) => handleSelect(ev, filter)}
          />
          <label 
            htmlFor={`${filter.id}`} 
            className={styles.name}> {filter.name} 
          </label>
        </li>
      )
    })
  }

  return (
    <nav className={styles.container} >
      <ul className={styles.list} >
        {renderFilters()}
      </ul>
    </nav>
  )
}