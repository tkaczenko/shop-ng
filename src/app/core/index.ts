import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimingInterceptor } from './interceptors/timing';


export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TimingInterceptor,
        multi: true
    }
]; 