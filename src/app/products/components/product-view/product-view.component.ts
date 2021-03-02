import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { ProductModel } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  @Input()
  product: ProductModel;
  @Output()
  addedToCart = new EventEmitter<ProductModel>();

  readonly CATEGORY = Category;

  constructor() { }

  ngOnInit(): void { }

  onAdd(): void {
    this.addedToCart.emit(this.product);
  }

  onBuy(): void {
    console.log('product was bought');
  }
}
