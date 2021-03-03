import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  backRouter$: Observable<string>;

  constructor(
    private cartService: CartService,
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
    this.backRouter$ = this.navigationService.backRouter$;
  }

  onRemove(): void {
    this.cartService.removeAllProducts();
  }

  getTotalSum(): number {
    return this.cartService.getTotalSum();
  }

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }
}
