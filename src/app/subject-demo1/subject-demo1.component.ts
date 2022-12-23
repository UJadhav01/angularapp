import { Component, OnInit } from '@angular/core';
import { EmpService } from '../all-services/empService';

export class EmployeeInformation{
  epId:number;
  epName:string;
  epCmp:string;
  epDept:string;
  epRole:string;
}

@Component({
  selector: 'app-subject-demo1',
  templateUrl: './subject-demo1.component.html',
  styleUrls: ['./subject-demo1.component.css']
})
export class SubjectDemo1Component implements OnInit {

  employeeArray=[];
  combinedArrObj:EmployeeInformation[]=[];

  //array of object for employee
  // employeeArray:any=[
  //   {epId:1,epName:'shiv',epCmp:'TCS',epDept:'Development',epRole:'UI developer'},
  //   {epId:2,epName:'Aditya',epCmp:'Wipro',epDept:'Testing',epRole:'tester'},
  //   {epId:3,epName:'Jay',epCmp:'Infy',epDept:'HR',epRole:'Leader'}
  // ];

  //injecting service
  constructor(private _empService:EmpService) { }

  ngOnInit() {
    //to get values from subject
    this._empService.employee.subscribe(empolyeeData=>{
      console.log(empolyeeData);
      // this.employeeArray=empolyeeData;
      this.employeeArray.push(empolyeeData);


    });
  }

  //this is for array of object data
    // onUpdate(){
    // this._empService.employee.next(this.employeeArray);
    //   }

    //for user input data
  onUpdate(eid,ename,ecmp,edept,erole){
    //next method is used to pass the value or data to observable
    // this._utilityService.userName.next(uname.value);
      let combinedArrObj:EmployeeInformation={epId:eid,epName:ename,epCmp:ecmp,epDept:edept,epRole:erole}
      this._empService.employee.next(combinedArrObj);

    }
}
