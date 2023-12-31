import React from "react"
import { JsxElement } from "typescript"
import IProducts from '../Interfaces/IProducts'
import style from './FilterableProductTable.module.css'
import SearchBar from './SearchBar/SearchBar'
import ProductTable from './ProductTable/ProductTable'

function FilterableProductTable({products} : IProducts) : JSX.Element {

    const [filterText, setFilterText] = React.useState('');
    const [inStockOnly, setInStockOnly] = React.useState(false);
    
    const handleFilterTextChange = (filterText : string) => setFilterText(filterText);
    
    const handleInStockChange = (inStockOnly : boolean) => setInStockOnly(inStockOnly);
    return (
        <div className={style.div}>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} handleFilterTextChange={handleFilterTextChange} handleInStockChange={handleInStockChange}/>
            <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
        </div>
    )
}

export default FilterableProductTable