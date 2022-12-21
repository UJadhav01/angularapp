import { Component, OnInit } from '@angular/core';
import { EmpService } from '../all-services/empService';

@Component({
  selector: 'app-subject-demo1',
  templateUrl: './subject-demo1.component.html',
  styleUrls: ['./subject-demo1.component.css']
})
export class SubjectDemo1Component implements OnInit {

  // epId:number;
  // epName:string;
  // epCmp:string;
  // epDept:string;
  // epRole:string;

  //array of object for employee
  employeeArray:any=[
    {epId:1,epName:'shiv',epCmp:'TCS',epDept:'Development',epRole:'UI developer'},
    {epId:2,epName:'Aditya',epCmp:'Wipro',epDept:'Testing',epRole:'tester'},
    {epId:3,epName:'Jay',epCmp:'Infy',epDept:'HR',epRole:'Leader'}
  ];

  //injecting service
  constructor(private _empService:EmpService) { }

  ngOnInit() {
    //to get values from subject
    this._empService.employee.subscribe(empolyeeData=>{
      console.log(empolyeeData);
      this.employeeArray=empolyeeData;

    });
  }

  //to assign value
    onUpdate(){
    this._empService.employee.next(this.employeeArray);
      }


        // onUpdate(eid,ename,ecmp,edept,erole){
    // this._empService.epId.next(eid.value);
    // this._empService.epName.next(ename.value);
    // this._empService.epCmp.next(ecmp.value);
    // this._empService.epDept.next(edept.value);
    // this._empService.epRole.next(erole.value);
}
