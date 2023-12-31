import React from "react"
import ISearch from "../../Interfaces/ISearch"
import style from './SearchBar.module.css'
function SearchBar({filterText, inStockOnly, handleFilterTextChange, handleInStockChange} : ISearch){
    return (
      <form>
      <input
        className={style.Search}
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => handleFilterTextChange(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => handleInStockChange(e.target.checked)}
        />
        {' '}
        Only show products in stock
      </p>
    </form>
    )
}
export default SearchBar