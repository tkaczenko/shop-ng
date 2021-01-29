import { ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input()
  item: ProductModel;

  @Output()
  removedItem = new EventEmitter<number>();
  @Output()
  updatedItem = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onMinus(): void {
    if (this.item.quantity) {
      const item: ProductModel = {
        ...this.item,
        quantity: this.item.quantity - 1
      };
      if (item.quantity != null && item.quantity < 1) {
        this.removedItem.emit(item.id);
      } else {
        this.updatedItem.emit(item);
      }
    }
  }

  onPlus(): void {
    if (this.item.quantity) {
      const item: ProductModel = {
        ...this.item,
        quantity: this.item.quantity + 1
      };
      this.updatedItem.emit(item);
    }
  }

  onRemove(): void {
    this.removedItem.emit(this.item.id);
  }
}
