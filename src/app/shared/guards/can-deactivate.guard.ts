import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../interfaces/can-component-deactivate.interface';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('CanDeactivate Guard is called');
    return component.canDeactivate ? component.canDeactivate() : true;
  }

}
