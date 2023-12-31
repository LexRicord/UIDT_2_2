import React from "react";
import IProductRow from "../../../Interfaces/IProductRow";

function ProductRow({product, key}: IProductRow)  {
    
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;
    const price = product.stocked ?
    product.price :
    <span style={{color: 'red'}}>
      {product.price}
    </span>;
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
    
}

export default ProductRow;