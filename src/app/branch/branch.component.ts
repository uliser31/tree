import {  Component, 
          Input, 
          Output,
          EventEmitter,
          HostBinding
        } from '@angular/core';

import { Product } from '../product.models';

//import { selectProduct, initProduct } from '../product.actions';

@Component({
  selector: 'branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent{
  @Input() product!: Product;
  @Output() onProductSelected: EventEmitter <Product>;
  @Input() currentProduct!: Product;
  @HostBinding('attr.class') cssClass = 'item';

  expand : boolean = true;
  
  //currentProduct!: Product;
  
  constructor(){
    this.onProductSelected = new EventEmitter;
  }

  hasChield(): Boolean{
    if (!this.product.children||!this.product.children.length){
      return false}
    return true  
  }  
   
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
    this.currentProduct = product;
    console.log("In the Node. The product was emitted to the brach",this.product);
    this.onProductSelected.emit(product);
  };
    
  clicked(product: Product){
    //this.store.dispatch(selectProduct, this.product);
    //this.store.dispatch(initProduct);
    this.currentProduct = product;
    console.log("The product was clicked",product);
    this.onProductSelected.emit(product);
    return true;
}   
  
}
