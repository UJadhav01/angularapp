import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-angular-hooks-life-cycle',
  templateUrl: './angular-hooks-life-cycle.component.html',
  styleUrls: ['./angular-hooks-life-cycle.component.css']
})
export class AngularHooksLifeCycleComponent implements OnInit , OnChanges{
  //data from parent-hooks-life-cycle.component.ts
  @Input() cutInfo2;

  //sample example for observing working of ngOnChange() hook
  lifecycleTicks: number = 0;

  constructor() { }

  //getting array of object into change()
  ngOnChanges(changes:{cutInfo2}): void {
    //this.lifecycleTicks++;
    for (const element in changes) {
         const el=changes[element];
         const {preVal,currentVal,firstChange}=el; //object destructuring
         console.table(changes[element]); //for observation 
    }
  }



  ngOnInit() {
  }

}
