import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customeVowels'
})
export class CustomeVowelsPipe implements PipeTransform {
  vowelsStr: string;
result='';
vowelsCount=0;
  transform(value: any, ...args: any[]): any {
for (let index = 0; index < value.length; index++) {
  if(value.charAt(index)=='a' ||
  value.charAt(index)=='e' ||
  value.charAt(index)=='i' ||
  value.charAt(index)=='o' ||
  value.charAt(index)=='u'){
  this.vowelsCount=this.vowelsCount+1;

  this.result+=value.charAt(index)+' ';
  }

}
    return this.result;
  }

}
