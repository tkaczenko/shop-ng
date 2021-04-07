import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../../shared/models/product.model';
import { ProductsModule } from '../../products.module';
import { ProductsActions } from '../../state';
import * as fromProducts from '../../state/products.reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  products$: Observable<ProductModel[]>;

  constructor(
    private store: Store<fromProducts.ProductsState>,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(ProductsActions.loadProducts());
    this.products$ = this.store.pipe(
      select(fromProducts.selectProductEntitiesState),
      map(products => Object.values(products) as ProductModel[])
    );
  }

  onAddToCart(product: ProductModel): void {
    this.cartService.addProduct(product);
  }

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }
}
