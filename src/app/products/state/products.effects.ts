import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import { ProductsActions } from '.';
import { ProductsService } from '..';
import { ProductModel } from '../../shared';



@Injectable()
export class ProductEffects {
  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      exhaustMap(() =>
        from(this.productsService.getProducts()).pipe(
          map((products: ProductModel[]) => ProductsActions.successLoadProducts({ payload: products })),
        )
      )
    )
  );

  getProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProduct),
      exhaustMap(action =>
        this.productsService.getProduct(action.payload).pipe(
          map((product: ProductModel) => ProductsActions.successGetProduct({ payload: product })),
        )
      )
    )
  );

  constructor(private actions$: Actions,
    private productsService: ProductsService) { }

}
