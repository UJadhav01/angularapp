import { Component, OnInit } from '@angular/core';
import { EmpService } from '../all-services/empService';
import { EmployeeInformation } from '../subject-demo1/subject-demo1.component';

@Component({
  selector: 'app-subject-demo2',
  templateUrl: './subject-demo2.component.html',
  styleUrls: ['./subject-demo2.component.css']
})
export class SubjectDemo2Component implements OnInit {

  employeeArray=[];


  // employeeArray:any=[
  //   {epId:1,epName:'shiv',epCmp:'TCS',epDept:'Development',epRole:'UI developer'},
  //   {epId:2,epName:'Aditya',epCmp:'Wipro',epDept:'Testing',epRole:'tester'},
  //   {epId:3,epName:'Jay',epCmp:'Infy',epDept:'HR',epRole:'Leader'},
  //   {epId:4,epName:'krishna',epCmp:'L&T',epDept:'Finance',epRole:'cashier'}

  // ];
  constructor(private _empService:EmpService) { }

  ngOnInit() {
    this._empService.employee.subscribe(empolyeeData=>{
      console.log(empolyeeData);
// this.employeeArray=empolyeeData;
this.employeeArray.push(empolyeeData);

    })
  }

  //for array of object
  // onUpdate(){
  //   this._empService.employee.next(this.employeeArray);
  // }

  //for user inputs
  onUpdate(eid,ename,ecmp,edept,erole){
    let combinedArrObj:EmployeeInformation={epId:eid,epName:ename,epCmp:ecmp,epDept:edept,epRole:erole}
    this._empService.employee.next(combinedArrObj);

  }
}



