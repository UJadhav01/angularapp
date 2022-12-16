import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Courses } from '../models/courses';

@Component({
  selector: 'app-decorator-ass',
  templateUrl: './decorator-ass.component.html',
  styleUrls: ['./decorator-ass.component.css']
})
export class DecoratorAssComponent implements OnInit {

  @Input() employeeInfo;
  @Output() vegetables:EventEmitter<string>=new EventEmitter<string>();

  @Output() newCourses:EventEmitter<Object>=new EventEmitter<Object>();

  //for getting key and property of objects
  // get transformedBody() {
  //   return Object.keys(this.employeeInfo);
  // }
  courses:Courses[]=[];

  constructor() {
    this.courses.push({courseId:1,courseName:'Complete front-end web development',courseContent:'HTML,CSS,JS,Angular',
    youCanGetJobAs:'Front-end developer'});
    this.courses.push({courseId:2,courseName:'Complete back-end development',courseContent:'any lag. Java,Python ,C#,ruby',youCanGetJobAs:'back-end developer'}),
    this.courses.push({courseId:3,courseName:'Azure',courseContent:'database/data mining/data warehousing tools etc.',youCanGetJobAs:'Data engineer'});

  }

  ngOnInit() {
    //for displaying data of single object
    // console.log(`Send from parent Employee id = `,this.employeeInfo.emp_id);
    // console.log(`Send from parent Employee Name = `,this.employeeInfo.emp_name);
    // console.log(`Send from parent Employee salary = `,this.employeeInfo.emp_salary);
    // console.log(`Send from parent Employee Company = `,this.employeeInfo.emp_company);
    // console.log(`Send from parent Employee Department = `,this.employeeInfo.emp_department);

    console.table(this.employeeInfo); //displaying data of array of objects

  }

  onSendVeg(value1){
    // vegetables is nothing but your custom event (vegetables)
    this.vegetables.emit(value1);
  }

  onGetObject(){
this.newCourses.emit(this.courses);
  }

}
