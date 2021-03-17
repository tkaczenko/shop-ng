import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, publish, refCount, retry } from 'rxjs/operators';
import { OrderModel } from '../models/order.model';

export const OrdersAPI = new InjectionToken<string>('OrdersAPI', {
  providedIn: 'any',
  factory: () => 'http://localhost:3000/orders'
})

@Injectable({
  providedIn: 'any'
})
export class OrderService {

  constructor(
    private http: HttpClient,
    @Inject(OrdersAPI) private ordersUrl: string) { }

  getOrders(): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>(this.ordersUrl).pipe(
      retry(3),
      publish(),
      refCount(),
      catchError(this.handleError)
    );
  }

  createOrder(order: OrderModel): Observable<OrderModel> {
    console.log(this.ordersUrl);
    return this.http.post<OrderModel>(this.ordersUrl, order, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
