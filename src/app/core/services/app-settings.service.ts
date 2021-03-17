import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { defaultIfEmpty, retry, switchMap } from 'rxjs/operators';
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
          return of(settingsFromAssets);
        }
        return of(JSON.parse(savedSettings));
      }),
      retry(2),
      defaultIfEmpty(<AppSettingsModel>{
        title: "default",
        id: "default",
        login: "default",
        email: "default"
      })
    );
  }
}
