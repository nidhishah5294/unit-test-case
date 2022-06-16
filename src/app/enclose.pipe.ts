import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enclose'
})
export class EnclosePipe implements PipeTransform {

  transform(value: any, type?: string): any {
    if (type != undefined && type.toLocaleLowerCase() === 'curly') {
      return '{' + value + '}';
    } else if (type != undefined && type.toLocaleUpperCase() === 'square') {
      return '[' + value + ']';
    }
    else {
      return '(' + value + ')';

    }
  }

}
