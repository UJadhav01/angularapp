import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Courses } from '../models/courses';
import { EmployeeInfo } from '../models/employeeInfo';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-output-decorator',
  templateUrl: './output-decorator.component.html',
  styleUrls: ['./output-decorator.component.css']
})
export class OutputDecoratorComponent implements OnInit {
  employeeInfo:EmployeeInfo=new EmployeeInfo();
  empObject1=[]; //main array

  constructor() {
    //for single object
    // this.employeeInfo.emp_id=1;
    // this.employeeInfo.emp_name='Shiv';
    // this.employeeInfo.emp_salary=60000;
    // this.employeeInfo.emp_company='tcs';
    // this.employeeInfo.emp_department='developer';

    this.empObject1.push({ emp_id:1,emp_name:'ashu',emp_salary:20000,emp_company:'tcs',emp_department:'hr'});
    this.empObject1.push({ emp_id:2,emp_name:'raj',emp_salary:30000,emp_company:'infy',emp_department:'developer'});
    this.empObject1.push({ emp_id:3,emp_name:'jay',emp_salary:40000,emp_company:'wipro',emp_department:'finance'});
    this.empObject1.push({ emp_id:4,emp_name:'vijay',emp_salary:50000,emp_company:'codemind',emp_department:'testing'});
    this.empObject1.push({ emp_id:5,emp_name:'jack',emp_salary:60000,emp_company:'cognizent',emp_department:'backend'});

  }
  ngOnInit(): void {
  }

  arrayOfVeg:string[]=['Tomato','Potato'];
  newArrayOfCourses:any[]=[];

  getDataFromChild(event){
    this.arrayOfVeg.push(event);
  }


  getDataFromObject(value){
this.newArrayOfCourses=value;

  }

}
