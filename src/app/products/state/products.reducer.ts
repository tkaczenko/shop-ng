import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { ProductModel } from 'src/app/shared';
import { ProductsActions } from '.';
import * as fromRoot from '../../reducers';

export const productsFeatureKey = 'products';

export interface State extends EntityState<ProductModel> {
  selectedId: string | null;
}

export interface ProductsState extends fromRoot.State {
  [productsFeatureKey]: State
}

export const adapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>({
  selectId: (book: ProductModel) => book.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedId: null,
});

export const reducer = createReducer(
  initialState,
  on(ProductsActions.successLoadProducts, (state: State, { payload }) =>
    adapter.addMany(payload, state)
  ),
  on(ProductsActions.successGetProduct, (state: State, { payload }) => ({
    ...state,
    selectedId: payload.id
  }))
);

export const selectProductsState = createFeatureSelector<ProductsState, State>(
  productsFeatureKey
);

export const selectProductEntitiesState = createSelector(
  selectProductsState,
  (state) => state.entities
);

export const selectSelectedId = (state: State) => state.selectedId;