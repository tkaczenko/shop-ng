import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../../shared/models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: ProductModel[];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onAddToCart(product: ProductModel): void {
    this.cartService.add(product);
  }
}
