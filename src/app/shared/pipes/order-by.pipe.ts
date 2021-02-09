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
      // подозреваю, что тут будет сортировка по первому полю,
      // а затем массив пересортируется по второму полю, но эта вторая сортировка
      // не будет в рамках одинаковых значений первого поля, а просто пересортирует массив,
      // верно?
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
