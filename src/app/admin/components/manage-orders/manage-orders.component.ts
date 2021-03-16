import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
