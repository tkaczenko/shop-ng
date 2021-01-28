import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root',
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
      const found = this.products.find((item) => item.id === product.id);
      if (found != null && found.quantity) {
        found.quantity += 1;
      }
    }
  }

  getAll(): ProductModel[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.map((product: ProductModel) => product.price)
      .reduce((prev, next) => prev + next);
  }

  private isProductInCart(id: number): boolean {
    return this.products.some((item) => item.id === id);
  }
}
