import { InjectionToken } from '@angular/core';
import { ConfigModel } from '../models/config.model';
import { GeneratorService } from './generator.service';

export const configToken = new InjectionToken<ConfigModel>('config');
export const generatedString = new InjectionToken<string>('generated string');

export function generatorFactory(n: number): (generatorService: GeneratorService) => string {
  return (generatorService: GeneratorService): string =>
    generatorService.generate(n);
}
