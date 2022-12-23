import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {
  greeting: string

  transform(value: any, ...args): any {

  this.greeting = value.split('').reverse().join('');

    return this.greeting;
  }
}
