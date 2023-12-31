import IProduct from "./IProduct";
export default interface IProductTable {
    products: IProduct[];
    filterText: string;
    inStockOnly: boolean;
    
}