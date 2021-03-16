import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateGuard } from 'src/app/shared/guards/can-deactivate.guard';
import { CanComponentDeactivate } from 'src/app/shared/interfaces/can-component-deactivate.interface';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManageProductsComponent implements OnInit, CanDeactivateGuard {

  constructor() { }

  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean
    | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
