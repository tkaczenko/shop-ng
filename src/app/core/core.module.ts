import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FirstComponent } from './components/first/first.component';
import { ConfigModel } from './models/config.model';
import { configToken, generatedString, generatorFactory } from './services/constants.service';
import { GeneratorService } from './services/generator.service';
import { LocalStorageService } from './services/local-storage.service';
import { LoginComponent } from './components/login/login.component';

export const configValue: ConfigModel = {
  id: '',
  login: 'tkaczenko',
  email: 'andrii.tkaczenko@gmail.com',
};


@NgModule({
  declarations: [FirstComponent, LoginComponent],
  imports: [
    SharedModule,
  ],
  providers: [
    {
      provide: configToken,
      useValue: configValue
    },
    {
      provide: generatedString,
      useFactory: generatorFactory(15),
      deps: [GeneratorService]
    },
    {
      provide: LocalStorageService,
      useClass: LocalStorageService,
    }
  ],
  exports: [FirstComponent, LoginComponent],
})
export class CoreModule { }
