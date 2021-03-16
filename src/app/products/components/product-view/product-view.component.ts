import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CartService } from 'src/app/cart';
import { Category } from 'src/app/shared/models/category.model';
import { ProductModel } from 'src/app/shared/models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductViewComponent implements OnInit {
  product: ProductModel;

  @Output()
  addedToCart = new EventEmitter<ProductModel>();

  readonly CATEGORY = Category;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // it is not necessary to save subscription to route.paramMap
    // when router destroys this component, it handles subscriptions automatically
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.productsService.getProduct(params.get('productID')))
      )
      .subscribe({
        next: (product: any) => {
          if (product) {
            this.product = { ...product };
          }
        },
        error: (err: any) => console.log(err)
      });
  }

  onAdd(): void {
    this.cartService.addProduct(this.product);
  }

  onBuy(): void {
    console.log('product was bought');
  }

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }
}
