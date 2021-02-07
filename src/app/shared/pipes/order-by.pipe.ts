import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], fields: string[], isAsc: boolean = false): any[] {
    console.log(value);
    if (!Array.isArray(value)) {
      return value;
    }
    fields.forEach(field => {
      value.sort((a: any, b: any) => {
        if (a[field] < b[field]) {
          return isAsc ? -1 : 1;
        } else if (a[field] > b[field]) {
          return isAsc ? 1 : -1;
        } else {
          return 0;
        }
      });
    });
    return value;
  }

}
