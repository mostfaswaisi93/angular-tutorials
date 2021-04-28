import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpper'
})
export class FirstUpperPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    console.log('transform  value', value);
    return value.toUpperCase();
  }

}
