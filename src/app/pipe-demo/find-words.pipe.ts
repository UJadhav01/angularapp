import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findWords'
})
export class FindWordsPipe implements PipeTransform {
findWordString;
wordLength;
  transform(value: string,): string {
    this.findWordString=value.split(' ');
this.wordLength=this.findWordString.length;
    return this.wordLength;
  }

}
