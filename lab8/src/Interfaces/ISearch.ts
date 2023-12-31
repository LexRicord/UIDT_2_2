export default interface ISearch {
    filterText: string;
    inStockOnly: boolean;
    handleFilterTextChange(a:string): void;
    handleInStockChange(a:boolean): void;
}