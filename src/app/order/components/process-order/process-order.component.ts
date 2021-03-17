import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CartService } from 'src/app/cart';
import { OrderItem, OrderModel } from 'src/app/core/models/order.model';
import { ProductModel } from 'src/app/shared';
import { OrderService } from '../../../core/services/order.service';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessOrderComponent implements OnInit, OnDestroy {
  order: OrderModel;

  private unsubscribe = new Subject();

  constructor(
    private orderService: OrderService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().pipe(
      takeUntil(this.unsubscribe)
    ).subscribe((v: ProductModel[]) => {
      const orderItems = v.map(product => <OrderItem>{ ...product, count: product.quantity });
      this.order = <OrderModel>{
        items: orderItems
      };
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onOrder(): void {
    this.orderService.createOrder(this.order);
  }
}
