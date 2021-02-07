import { InjectionToken } from '@angular/core';
import { ConfigModel } from '../models/config.model';
import { GeneratorService } from './generator.service';

export const configToken = new InjectionToken<ConfigModel>('config');
export const generatedString = new InjectionToken<string>('generated string');

export function generatorFactory(n: number): any {
  return (generatorService: GeneratorService) =>
    generatorService.generate(n);
}
