//https://www.youtube.com/watch?v=fiT5ng5wgrk&t=68s
import { Component, 
         OnInit,
         Input
         } from '@angular/core';

import { Store } from '@ngrx/store';
import { selectProduct} from '../product.actions';
import { Product } from '../product.models';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { selectSelected,selectIsSelected } from '../product.selector';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit{
  @Input() product!: Product;
  
  selected$: Observable<Product> = new Observable();
  isSelected$: Observable<boolean> = new Observable();

  expand : boolean = true;
  
  constructor (private store: Store<AppState>)
  {
   
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
      if (!this.selected$ || !product){
      return false;
    }
    return this.selected$.pipe.name === product.name
  }

  clicked(product: Product){
    this.store.dispatch(selectProduct({product: product})); // props<{ product: Product}>()
    console.log("The product was clicked",product);
    return false;
  }
  ngOnInit():void{
    this.selected$ = this.store.select(selectSelected);
    this.isSelected$ = this.store.select(selectIsSelected(this.product));
  }
}
