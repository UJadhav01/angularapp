import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDemo'
})
export class FilterDemoPipe implements PipeTransform {

  transform(val: any, searchTearm:any): any {
    return val.filter(function(search) {
      return search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
    });
  }

}
