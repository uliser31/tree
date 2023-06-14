//https://www.youtube.com/watch?v=qq5Wa-b4fZE&t=19

//i0mport { Action } from "rxjs/internal/scheduler/Action";
//https://www.youtube.com/watch?v=fiT5ng5wgrk&list=PL_WGMLcL4jzVkzMox4UxGcsBLvFurCDax&index=3
import { createReducer, on} from '@ngrx/store'
import { selectProduct, loadProducts, loadedProducts } from './product.actions';

import { Product } from "./product.models";
import { ProductState } from './product.state';

export const initialState : ProductState={
 loading: false,
 selected: new Product(''),
 product: [
  new Product('Mercado Reducer',[
  new Product('Productos',[
    new Product (
      'Frutas',
       [
        new Product('Mango',
          [
            new Product('Mamey'),
            new Product('Moro'),
            new Product('Pinna') 
          ]
        ),
        new Product('Guayaba',
        [
          new Product('delPeru'),
          new Product('Roja'),
          new Product('Blanca') 
        ]
      )
      ]
      ),
    new Product (
     'Hortalizas',
       [
      new Product('Calabaza'),
      new Product('Berenjena')
    ]
    ),
    new Product (
    'Viandas',
    [
     new Product('Yuca'),
     new Product('Boniato')
   ]
 )]
)]  
)],
}

export const productReducer = createReducer(
  initialState,
  on(loadProducts,(state)=> {
    return {...state, loading : true}}),
  on(loadedProducts, (state)=>{
    return {...state, loading : false}
  }),    
  on(selectProduct,(state,{product})=>{
    return {...state,selected:product}
  })
)