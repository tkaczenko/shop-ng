import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  private readonly characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  private readonly charactersLength = this.characters.length;

  constructor() {}

  generate(n: number): string {
    let result = '';
    for (let i = 0; i < n; i++) {
      result += this.characters.charAt(Math.floor(Math.random() * this.charactersLength));
    }
    return result;
  }
}
