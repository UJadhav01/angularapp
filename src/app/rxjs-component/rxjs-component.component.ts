import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { concat, count, filter, map,  max,  mergeMap,  reduce,  take,  toArray } from 'rxjs/operators';
import { RxjsOperatorService } from '../all-services/rxjs-operator.service';

@Component({
  selector: 'app-rxjs-component',
  templateUrl: './rxjs-component.component.html',
  styleUrls: ['./rxjs-component.component.css']
})
export class RxjsComponentComponent implements OnInit {

  constructor(private _rxjs:RxjsOperatorService) { }

  ngOnInit() {

    //for simple name object with map method
  const nameArr=from(this._rxjs.arr);
  nameArr.subscribe(nameRes=>{
  console.log('Data from service ',nameRes);
});

//for gender object with filter method
let genderArray=from(this._rxjs.gender);
genderArray.pipe(

  filter(result=>result.value=='female'),
  toArray()
).subscribe(genderRes=>{
  console.log('gender data using filter operator ',genderRes);
});

//for returning square using map,of is creation operator it works like array.map
of(1, 2, 3)
  .pipe(map((x) => x * x),toArray())
  .subscribe((v) => console.log(`Square of 1 , 2, 3 using map are : ${v}`));

  //mergeMap operator
  const letters = of('a', 'b', 'c');
  const result = letters.pipe(
    mergeMap(x => interval(1000).pipe(take(3),map(i => x + i)))
  );

  result.subscribe(x => console.log(`Merge example using mergeMap, interval and take operator`,x));


  //interval operator

  let source=interval(3000);
  source.pipe(
    take(3)).subscribe(intervalData=>{
      console.log(`example of interval ,${intervalData}`);

    });

//find max value
let list1 = [1, 6, 15, 10, 58, 2, 40];
from(list1).pipe(max((a,b)=>a-b)).subscribe(x => console.log(`The Max value form ${JSON.stringify(list1)} using max operator `+x));


//reduce
let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
test1.pipe(
  //  filter(x => x % 2 === 0),
   reduce((a, b) => a + b, 0)
).subscribe(x => console.log(`Addition of array element using reduce operator `,x));

//count
let countArr=[];
let all_nums = of(1, 7, 3,6,8,9,12,23);
all_nums.pipe(count()).subscribe(x => console.log(`The count of array element using count operator `+x));

//concat
let list= of(1, 2, 3, 4, 5,6);
let list2 = of(7, 2, 8, 9, 10);
let x='';
list.pipe(concat(list2)).subscribe(x1 => {
x+=x1+' ';
 } );
 console.log(`merging or Concatenation of two arrays using concat operator `,x);
}
  }

