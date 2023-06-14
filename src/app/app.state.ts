import { ActionReducerMap } from "@ngrx/store";
import { ProductState } from "./product.state";
import { productReducer } from "./product.reducer";

export interface AppState {
    product: ProductState
}

export const ROOT_REDUCER :  ActionReducerMap<AppState> = {
    product: productReducer }

