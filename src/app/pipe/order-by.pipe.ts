import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(value: any[], field: string): any[] {
    return value.sort((a, b) => a[field] - b[field]);
  }
}
