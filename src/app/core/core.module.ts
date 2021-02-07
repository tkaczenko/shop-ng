import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModel } from './models/config.model';
import { configToken, generatedString, generatorFactory } from './services/constants.service';
import { FirstComponent } from './components/first/first.component';
import { GeneratorService } from './services/generator.service';
import { MaterialModule } from '../material/material.module';
import { LocalStorageService } from './services/local-storage.service';
import { SharedModule } from '../shared/shared.module';

export const configValue: ConfigModel = {
  id: '',
  login: 'tkaczenko',
  email: 'andrii.tkaczenko@gmail.com',
};


@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    MaterialModule,
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
  exports: [FirstComponent],
})
export class CoreModule { }
