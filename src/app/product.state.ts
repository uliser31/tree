import { Product } from "./product.models";

export interface ProductState{
    product: Product[],
    selected: Product, 
    loading: boolean   
}