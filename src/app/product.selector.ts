import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state"; 
import { ProductState } from "./product.state";
import { Product } from "./product.models";

// esto es como que voyu a trabajar en la entidad product definida en APPSTATE
export const selectProductFeature = (state: AppState) => state.product

export const selectListProduct = createSelector (
    selectProductFeature,
    (state: ProductState) => (state.product)
)

export const selectLoading = createSelector(
    selectProductFeature,
    (state:ProductState)=>state.loading);

export const selectSelected = createSelector(
    selectProductFeature,
    (state:ProductState)=>state.selected,
    );

export const selectIsSelected = (product:Product)=>createSelector(
    selectProductFeature,
    (state:ProductState)=>state.selected.name == product.name,
    );