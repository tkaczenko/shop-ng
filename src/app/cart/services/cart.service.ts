import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: ProductModel[] = [];

  constructor() { }

  add(product: ProductModel): void {
    if (product.quantity == null) {
      product.quantity = 0;
    }
    if (!this.isProductInCart(product.id)) {
      product.quantity = 1;
      this.products.push(product);
    } else {
      this.products.forEach(item => {
        if (item.id === product.id) {
          if (item.quantity) {
            item.quantity += 1;
          }
        }
      });
    }
  }

  getAll(): ProductModel[] {
    return this.products;
  }

  private isProductInCart(id: number): boolean {
    return this.products.some(item => item.id === id);
  }
}
