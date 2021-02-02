import { ChangeDetectionStrategy, ElementRef, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnChanges {
  @Input()
  item: ProductModel;

  @Output()
  removedItem = new EventEmitter<number>();
  // @Output()
  // increasedItem = new EventEmitter<ProductModel>();
  // @Output()
  // decreasedItem = new EventEmitter<ProductModel>();
  @Output()
  changedItem = new EventEmitter<ProductModel>();

  quantity?: any;
  error: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.quantity = this.item.quantity;
  }

  onMinus(): void {
    // this.decreasedItem.emit(this.item);
  }

  onPlus(): void {
    // this.increasedItem.emit(this.item);
  }

  onRemove(): void {
    this.removedItem.emit(this.item.id);
  }

  onChange(): void {
    this.changedItem.emit(this.item);
  }

  onBlur(): void {
    const temp = parseInt(this.quantity, 10);
    if (isNaN(temp)) {
      alert('не верное значение');
    }
  }
}
