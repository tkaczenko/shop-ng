import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { defaultIfEmpty, retry, switchMap, tap } from 'rxjs/operators';
import * as settingsFromAssets from '../../../assets/app-settings.json';
import { AppSettingsModel } from '../models/app-settings.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private readonly key = 'app-settings';

  constructor(private localStorage: LocalStorageService) { }

  load(): Observable<AppSettingsModel> {
    return of(this.localStorage.get(this.key)).pipe(
      switchMap((savedSettings) => {
        if (savedSettings === null) {
          this.localStorage.set(this.key, JSON.stringify(settingsFromAssets));
          // Тут происходит загрузка не данных, а модуля,
          // поэтому структура другая, надо загрузить данные с помощью HttpClient
          // return of(settingsFromAssets);
          return of({id: 1});
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
