import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks-cycle',
  templateUrl: './hooks-cycle.component.html',
  styleUrls: ['./hooks-cycle.component.css']
})
export class HooksCycleComponent implements OnInit {
  colorName='red';
  constructor() { }

  ngOnInit() {
  }
  onHandleData(value){
    this.colorName=value.target.value;
  }
}
