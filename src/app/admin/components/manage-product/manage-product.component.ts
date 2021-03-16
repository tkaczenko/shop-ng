import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
