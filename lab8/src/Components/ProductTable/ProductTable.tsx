import React from "react"
import IProducts from './../../Interfaces/IProducts'
import IProductTable from "../../Interfaces/IProductTable"
import ProductRow from './ProductRow/ProductRow'
import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow'
import style from './ProductTable.module.css'
function ProductTable( {products, filterText, inStockOnly} : IProductTable) {
    const rows : JSX.Element[] = [];
    let lastCategory : string = '';
    
    

    products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th className={style.th}>Name</th>
            <th className={style.th}>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
}
export default ProductTable