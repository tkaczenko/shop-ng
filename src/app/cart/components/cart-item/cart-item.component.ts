import { ChangeDetectionStrategy, DoCheck, ElementRef, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements DoCheck {
  @Input()
  item: ProductModel;

  @Output()
  removedItem = new EventEmitter<number>();
  @Output()
  increasedItem = new EventEmitter<ProductModel>();
  @Output()
  decreasedItem = new EventEmitter<ProductModel>();
  @Output()
  changedItem = new EventEmitter<{id: number, quantity: number}>();

  quantity?: any;
  error: string;

  constructor() { }

  ngDoCheck(): void {
    this.quantity = this.item.quantity;
  }

  onMinus(): void {
    this.decreasedItem.emit(this.item);
  }

  onPlus(): void {
    this.increasedItem.emit(this.item);
  }

  onRemove(): void {
    this.removedItem.emit(this.item.id);
  }

  onChange(): void {
    this.changedItem.emit({
      id: this.item.id,
      quantity: parseInt(this.quantity, 10)
    });
  }

  onBlur(): void {
    const temp = parseInt(this.quantity, 10);
    if (isNaN(temp)) {
      alert('не верное значение');
    }
  }
}
