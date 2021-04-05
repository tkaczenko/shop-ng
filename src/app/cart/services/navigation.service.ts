import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private router$: BehaviorSubject<string> = new BehaviorSubject('/cart');

  backRouter$: Observable<string> = this.router$.asObservable();

  constructor() { }

  pushValue(path: string): void {
    this.router$.next(path);
  }
}
// Это ваше архитектурное решение
// Чтобы предложить альтернативу, надо над этим подумать и попробовать реализовать
// К сожалению, я не обладаю такими ресурсами времени
