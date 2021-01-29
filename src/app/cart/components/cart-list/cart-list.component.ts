import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  constructor(private cartService: CartService) { }

  ngOnInit(): void { }

  onUpdateItem(product: ProductModel): void {
    this.cartService.update(product);
  }

  onRemoveItem(id: number): void {
    this.cartService.remove(id);
  }

  getProducts(): ProductModel[] {
    return this.cartService.getAll();
  }

  getTotalAmount(): number {
    return this.cartService.getTotalAmount();
  }

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  trackByItems(index: number, item: ProductModel): number {
    return item.id;
  }
}
