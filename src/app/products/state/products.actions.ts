import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../../shared';

export const loadProducts = createAction(
  '[Product] Load Products'
);

export const getProduct = createAction(
  '[Product] Get Product',
  props<{ payload: string }>()
);

export const successLoadProducts = createAction(
  '[Product] Success Load Products',
  props<{ payload: ProductModel[] }>()
)

export const successGetProduct = createAction(
  '[Product] Success Get Product',
  props<{ payload: ProductModel }>()
)
