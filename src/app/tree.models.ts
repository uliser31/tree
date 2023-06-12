

import { Product } from "./product.models";

export class Tree{
    
    expand : boolean = true;
    
    currentProduct!: Product;

    constructor(){}
    
    expanded():boolean{
        return this.expand
    }
    
    expandClick(){
        console.log("Expand was clicked")
        this.expand = false;
        return false
    }
    
    contractClick(){
        console.log("Contract was clicked")
        this.expand = true;
        return false
      }   
    
    isSelected(product: Product): boolean {
        if (!this.currentProduct || !product){
          return false;
        }
        return this.currentProduct.name === product.name  
    }  
    
    productWasSelected(product: Product):void{
    //    this.currentProduct = product;
        console.log("El producto fue seleccionado",product)
    };
    
    clicked(product: Product){
        this.currentProduct = product;
        console.log("El producto fue clicked",product)
      
    }  
}