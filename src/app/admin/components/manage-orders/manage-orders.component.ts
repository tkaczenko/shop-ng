import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/app/core/models/order.model';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageOrdersComponent implements OnInit {
  orders: Observable<OrderModel[]>;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }

}
