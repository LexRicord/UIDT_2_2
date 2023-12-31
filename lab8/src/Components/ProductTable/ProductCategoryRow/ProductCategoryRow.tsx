import React from "react";
import IProductCategoryRow from "../../../Interfaces/IProductCategoryRow";
function ProductCategoryRow({category, key} : IProductCategoryRow) {
    return (
        <tr>
        <th>
          {category}
        </th>
      </tr>
    )
}

export default ProductCategoryRow;