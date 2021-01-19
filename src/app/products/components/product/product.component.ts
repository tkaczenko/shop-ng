import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()
  product: ProductModel;

  constructor(private cartService: CartService) {
    
  }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.cartService.add(this.product);
  }

  onBuy(): void {
    console.log('product was bought');
  }
}
