import { Inject, Injectable } from '@angular/core';
import { ConfigModel } from '../models/config.model';
import { configToken } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  constructor(@Inject(configToken) private config: ConfigModel) { }

  update(config: ConfigUpdate): ConfigModel {
    return  this.config = {
      ...this.config,
      ...config
    };
  }

  getConfig(): ConfigModel {
    return this.config;
  }
}

export interface ConfigUpdate {
  id?: string;
  login?: string;
  email?: string;
}
