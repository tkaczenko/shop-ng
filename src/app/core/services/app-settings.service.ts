import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { defaultIfEmpty, map, retry, switchMap, tap } from 'rxjs/operators';
import { AppSettingsModel } from '../models/app-settings.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private readonly key = 'app-settings';

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  load(): Observable<AppSettingsModel> {
    return of(this.localStorage.get(this.key)).pipe(
      switchMap((savedSettings) => {
        if (savedSettings === null) {
          return this.http.get<AppSettingsModel>('../../../assets/app-settings.json').pipe(
            map((assets: AppSettingsModel) => {
              this.localStorage.set(this.key, JSON.stringify(assets));
              return assets;
            })
          );
        }
        return of(JSON.parse(savedSettings));
      }),
      retry(2),
      defaultIfEmpty({
        title: 'default',
        id: 'default',
        login: 'default',
        email: 'default'
      } as AppSettingsModel),
      tap(val => console.log(val))
    );
  }
}
