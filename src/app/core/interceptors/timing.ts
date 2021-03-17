import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Injectable()
export class TimingInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // request interceptor
        const startTime = Date.now();

        let clonedRequest: any;
        if (req.url.includes('products')) {
            clonedRequest = req.clone({
                params: new HttpParams().set('timestamp', Date.now().toString())
            });
        } else {
            clonedRequest = req;
        }

        return next.handle(clonedRequest).pipe(
            filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
            map((event: HttpEvent<any>) => event as HttpResponse<any>),
            map((event: HttpResponse<any>) => {
                const elapsedTime = Date.now() - startTime;
                if (event.url?.includes('products')) {
                    console.log('TimingInterceptor: ' + elapsedTime + ' ms');
                }
                return event;
            })
        );
    }
}
