import {createAction, props}  from '@ngrx/store'
import { Product } from './product.models';

export const loadProducts = createAction(
    '[Product List] Load Product'
);

export const loadedProducts = createAction(
    '[Product List] Loaded success',
    //props<{ products: Product[]}>()

);

export const selectProduct = createAction(
    '[Product List] Select Product',
    props<{ product: Product}>() 
);

