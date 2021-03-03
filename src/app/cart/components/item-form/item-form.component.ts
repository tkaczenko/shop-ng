import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from 'src/app/shared/models/product.model';
import { CartService } from '../../services/cart.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit, OnDestroy {
  item: ProductModel;

  quantity?: any;
  error: string;

  private subscription: Subscription;

  constructor(
    private cartService: CartService,
    private navigationService: NavigationService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.navigationService.pushValue('./');
    this.subscription = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.cartService.getProductInCart$(params.get('productID')))
      )
      .subscribe({
        next: (product: any) => {
          if (product) {
            this.item = { ...product };
            this.quantity = this.item.quantity;
          }
        },
        error: (err: any) => console.log(err)
      });
  }

  onMinus(): void {
    this.cartService.decreaseQuantity(this.item.id, this.item.quantity);
  }

  onPlus(): void {
    this.cartService.increaseQuantity(this.item.id, this.item.quantity);
  }

  onRemove(): void {
    this.cartService.removeProduct(this.item.id);
  }

  onChange(): void {
    this.cartService.changeQuantity(this.item.id, parseInt(this.quantity, 10));
  }

  onBlur(): void {
    const temp = parseInt(this.quantity, 10);
    if (isNaN(temp)) {
      alert('не верное значение');
    }
  }
}
