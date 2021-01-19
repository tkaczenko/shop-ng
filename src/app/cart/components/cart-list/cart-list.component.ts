import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getProducts(): ProductModel[] {
    return this.cartService.getAll();
  }

  trackByItems(index: number, item: ProductModel): number {
    return item.id;
  }
}
