import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(value);
    return value ? '' : '';
  }

}
