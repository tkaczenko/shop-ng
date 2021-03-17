import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ProductModel } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: ProductModel[] = [];
  private totalQuantity = 0;
  private totalSum = 0;

  private subject$: BehaviorSubject<ProductModel[]> = new BehaviorSubject<ProductModel[]>([]);

  constructor(private localStorageService: LocalStorageService) {
    const cartData = this.localStorageService.get('cart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData);
      this.updateCartData();
    }
  }

  getProducts(): Observable<ProductModel[]> {
    return this.subject$.asObservable();
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

  increaseQuantity(id: string, quantity: number | undefined): void {
    this.changeQuantity(id, (quantity != null ? quantity : 0) + 1);
  }

  decreaseQuantity(id: string, quantity: number | undefined): void {
    this.changeQuantity(id, (quantity != null ? quantity : 0) - 1);
  }

  changeQuantity(id: string, quantity: number | undefined): void {
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

  removeProduct(id: string): void {
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
    this.subject$.next(Array.from(this.cartItems.values()));
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

  isEmptyCart(): boolean {
    return !this.cartItems || this.cartItems.length === 0;
  }

  getProductInCart$(id: string | null): Observable<any> {
    return this.getProducts().pipe(
      map(items => items.find(item => id === item.id))
    );
  }

  private getProductInCart(id: string): ProductModel | undefined {
    return this.cartItems.find((item) => id === item.id);
  }
}
