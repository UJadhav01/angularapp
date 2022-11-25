import { Component, OnInit } from '@angular/core';
import { NgSwitchDemo } from '../models/ngswitchdemo';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  selectedProduct:string;
  num: number= 0;

  ngSwitchArray:NgSwitchDemo[]=[{name:'One',val:1},{name:'Two',val:2},{name:'Three',val:3},{name:'Four',val:4},{name:'Five',val:5}]
  selectedValue: string;
    constructor() { }

    onSelectedProduct(selectedItems){
      console.log(selectedItems.target.value);
  this.selectedProduct=selectedItems.target.value;
    }

    onSelectedValue(event){
      this.selectedValue=event.target.value;
    }
  ngOnInit() {
  }

}
