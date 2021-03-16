import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input()
  item: ProductModel;

  constructor(
    private cartService: CartService
  ) {

  }

  onRemove(): void {
    this.cartService.removeProduct(this.item.id);
  }
}
