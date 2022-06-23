import preSetFilters from "./filters.json"
import styles from "./filters.module.scss";
import { Filter } from "modules/filters"

interface PropsFilters{
  onSelect: (filter:Filter) => void,
}

export function Filters({ onSelect }:PropsFilters){
  const filters = preSetFilters.map((value)=>{
    return new Filter(value.name) 
  })

  /*
    * @returns uma div para cada elemento contido em filters
  */
  const renderFilters = () => {
    return filters.map((filter, index) => {
      return(
        <li key={index} className={styles.filter} >
          <input 
            type="radio" 
            name="filter" 
            id={filter.name+filter.id} 
            className={styles.checkBox} 
            onChange={() => onSelect(filter)}
          />
          <label 
            htmlFor={filter.name+filter.id} 
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