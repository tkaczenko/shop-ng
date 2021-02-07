import { Component, OnInit } from '@angular/core';
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

  constructor(private cartService: CartService) { }

  ngOnInit(): void { }

  onChangeItem(event: { id: number, quantity: number }): void {
    this.cartService.changeQuantity(event.id, event.quantity);
  }

  onIncreaseItem(product: ProductModel): void {
    this.cartService.increaseQuantity(product.id, product.quantity);
  }

  onDecreaseItem(product: ProductModel): void {
    this.cartService.decreaseQuantity(product.id, product.quantity);
  }

  onRemoveItem(id: number): void {
    this.cartService.removeProduct(id);
  }

  onRemove(): void {
    this.cartService.removeAllProducts();
  }

  getProducts(): ProductModel[] {
    return this.cartService.getProducts();
  }

  getTotalSum(): number {
    return this.cartService.getTotalSum();
  }

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  trackByItems(index: number, item: ProductModel): number {
    return item.id;
  }
}
