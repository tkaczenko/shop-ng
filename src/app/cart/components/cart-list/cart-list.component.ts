import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductModel } from 'src/app/shared/models/product.model';
import { CartService } from '../../services/cart.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent implements OnInit {
  keys = [{
    key: 'price',
    label: 'Цена'
  },
  {
    key: 'quantity',
    label: 'Кол-во'
  },
  {
    key: 'name',
    label: 'Наименование'
  }];

  selected = ['price', 'quantity', 'name'];

  isAsc = false;

  cartItems$: Observable<ProductModel[]>;
  router$: BehaviorSubject<string>;

  constructor(
    private cartService: CartService,
    private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.pushValue('/products');
    this.cartItems$ = this.cartService.getProducts();
  }

  onChangeItem(event: { id: string, quantity: number }): void {
    this.cartService.changeQuantity(event.id, event.quantity);
  }

  onIncreaseItem(product: ProductModel): void {
    this.cartService.increaseQuantity(product.id, product.quantity);
  }

  onDecreaseItem(product: ProductModel): void {
    this.cartService.decreaseQuantity(product.id, product.quantity);
  }

  onRemoveItem(id: string): void {
    this.cartService.removeProduct(id);
  }

  trackByItems(index: number, item: ProductModel): string {
    return item.id;
  }
}
