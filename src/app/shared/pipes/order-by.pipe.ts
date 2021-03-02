import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], fields: string[], isAsc: boolean = false): any[] {
    if (!Array.isArray(value) || !Array.isArray(fields) || fields.length === 0) {
      return value;
    }
    const sorted = [...value];
    sorted.sort((a: any, b: any) => {
      for (const field of fields) {
        const compared = this.compare(a[field], b[field], isAsc);
        if (compared === 0) {
          continue;
        }
        return compared;
      }
      return this.compare(a[fields[0]], b[fields[0]], isAsc);
    });
    return sorted;
  }

  private compare(a: any, b: any, isAsc: boolean): number {
    if (a < b) {
      return isAsc ? -1 : 1;
    } else if (a > b) {
      return isAsc ? 1 : -1;
    } else {
      return 0;
    }
  }
}
