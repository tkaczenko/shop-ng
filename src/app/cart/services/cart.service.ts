import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductModel } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: ProductModel[] = [];
  private totalQuantity: number;
  private totalSum: number;

  private cart$: Subject<ProductModel[]> = new Subject();


  constructor() { }

  getProducts(): Observable<Array<ProductModel>> {
    return this.cart$.asObservable();
  }

  addProduct(product: ProductModel): void {
    const productInCart = this.getProductInCart(product.id);
    if (productInCart) {
      this.increaseQuantity(productInCart.id, productInCart.quantity);
    } else {
      this.cartItems.push({
        ...product,
        quantity: 1
      });
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
    const found = this.cartItems.find(item => id === item.id);
    if (found) {
      this.cartItems = [
        ...this.cartItems.filter(item => id !== item.id),
        {
          ...found,
          quantity: (quantity != null ? quantity : 0)
        }
      ];
    }
    this.updateCartData();
  }

  removeProduct(id: number): void {
    // пересоздание ссылки
    this.cartItems = this.cartItems.filter(item => id !== item.id);
    this.updateCartData();
  }

  removeAllProducts(): void {
    this.cartItems = [];
    this.updateCartData();
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
    this.cart$.next(Array.from(this.cartItems.values()));
  }

  private calculateTotalSum(): number {
    if (this.cartItems.length < 1) {
      return 0;
    } else {
      return this.cartItems.map(product => product.price * (product.quantity ? product.quantity : 0))
        .reduce((prev, next) => prev + next);
    }
  }

  private calculateTotalQuantity(): number {
    if (this.cartItems.length < 1) {
      return 0;
    } else {
      return this.cartItems.map(product => product.quantity ? product.quantity : 0)
        .reduce((prev, next) => prev + next);
    }
  }

  private getProductInCart(id: number): ProductModel | undefined {
    return this.cartItems.find((item) => item.id === id);
  }
}
