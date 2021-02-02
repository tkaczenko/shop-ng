import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts: ProductModel[] = [];
  private totalQuantity: number;
  private totalSum: number;

  constructor() { }

  addProduct(product: ProductModel): void {
    if (this.isProductInCart(product.id)) {
      this.increaseQuantity(product.id, product.quantity);
    } else {
      product.quantity = 1;
      this.cartProducts.push(product);
      this.updateCartData();
    }
  }

  increaseQuantity(id: number, quantity: number | undefined): void {
    this.changeQuantity(id, (quantity != null ? quantity : 0) + 1);
  }

  decreaseQuantity(id: number, quantity: number | undefined): void {
    this.changeQuantity(id, (quantity != null ? quantity : 0) - 1);
  }

  changeQuantity(id: number, quantity: number | undefined): void {
    if (quantity == null || quantity < 1) {
      return this.removeProduct(id);
    }
    const index = this.cartProducts.findIndex(item => id === item.id);
    this.cartProducts[index].quantity = (quantity != null ? quantity : 0);
    this.updateCartData();
  }

  removeProduct(id: number): void {
    this.cartProducts = this.cartProducts.filter(item => id !== item.id);
    this.updateCartData();
  }

  removeAllProducts(): void {
    this.cartProducts = [];
    this.updateCartData();
  }

  getProducts(): ProductModel[] {
    return this.cartProducts;
  }

  getTotalQuantity(): number {
    return this.totalQuantity;
  }

  getTotalSum(): number {
    return this.totalSum;
  }

  private updateCartData(): void {
    this.totalQuantity = this.calculateTotalQuantity();
    this.totalSum = this.calculateTotalSum();
  }

  private calculateTotalSum(): number {
    if (this.cartProducts.length < 1) {
      return 0;
    } else {
      return this.cartProducts.map(product => product.price * (product.quantity ? product.quantity : 0))
        .reduce((prev, next) => prev + next);
    }
  }

  private calculateTotalQuantity(): number {
    if (this.cartProducts.length < 1) {
      return 0;
    } else {
      return this.cartProducts.map(product => product.quantity ? product.quantity : 0)
        .reduce((prev, next) => prev + next);
    }
  }

  private isProductInCart(id: number): boolean {
    return this.cartProducts.some((item) => item.id === id);
  }
}
