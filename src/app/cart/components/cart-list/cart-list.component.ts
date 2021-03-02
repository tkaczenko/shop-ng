import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/shared/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
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

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
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

  onRemove(): void {
    this.cartService.removeAllProducts();
  }

  getTotalSum(): number {
    return this.cartService.getTotalSum();
  }

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  trackByItems(index: number, item: ProductModel): string {
    return item.id;
  }
}
