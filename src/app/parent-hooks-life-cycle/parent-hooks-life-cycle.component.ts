import { Component, OnInit } from '@angular/core';
import { CustomerSalonService } from '../models/customerSalonService';
import { Time } from "@angular/common";
import { parse } from 'querystring';

@Component({
  selector: 'app-parent-hooks-life-cycle',
  templateUrl: './parent-hooks-life-cycle.component.html',
  styleUrls: ['./parent-hooks-life-cycle.component.css']
})
export class ParentHooksLifeCycleComponent implements OnInit {


cutInfo:CustomerSalonService[]=[];

customerName:string;
wantService:string;
selectDate:Date;
selectTime:Date;
customerMobile:number;

//sample example
  // arbitraryData: string = 'initial';
  // constructor() {
  //   setTimeout(() => {
  //     this.arbitraryData = 'final';
  //   }, 5000);
  // }

  ngOnInit() {
  }

  addData(b,c,d,e,f){
this.cutInfo=[{customerName:b,wantService:c,selectDate:d,selectTime:e,customerMobile:f}];
}
}
