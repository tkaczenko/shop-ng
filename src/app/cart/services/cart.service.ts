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

  update(product: ProductModel): void {
    const index = this.products.findIndex(item => product.id === item.id);
    this.products[index] = product;
  }

  remove(id: number): void {
    this.products = this.products.filter(item => id !== item.id);
  }

  getAll(): ProductModel[] {
    return this.products;
  }

  getTotalAmount(): number {
    if (this.products.length < 1) {
      return 0;
    } else {
      return this.products.map(product => product.price)
        .reduce((prev, next) => prev + next);
    }
  }

  getTotalQuantity(): number {
    if (this.products.length < 1) {
      return 0;
    } else {
      return this.products.map(product => product.quantity ? product.quantity : 0)
        .reduce((prev, next) => prev + next);
    }
  }

  private isProductInCart(id: number): boolean {
    return this.products.some((item) => item.id === id);
  }
}
