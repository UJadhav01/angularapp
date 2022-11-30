import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Courses } from '../models/courses';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-output-decorator',
  templateUrl: './output-decorator.component.html',
  styleUrls: ['./output-decorator.component.css']
})
export class OutputDecoratorComponent implements OnInit {
  @Output() vegetables:EventEmitter<string>=new EventEmitter<string>();

  @Output() newCourses:EventEmitter<Object>=new EventEmitter<Object>();

  courses:Courses[]=[];

    constructor(){
      this.courses.push({courseId:1,courseName:'Complete front-end web development',courseContent:'HTML,CSS,JS,Angular',
      youCanGetJobAs:'Front-end developer'});
      this.courses.push({courseId:2,courseName:'Complete back-end development',courseContent:'any lag. Java,Python ,C#,ruby',youCanGetJobAs:'back-end developer'}),
      this.courses.push({courseId:3,courseName:'Azure',courseContent:'database/data mining/data warehousing tools etc.',youCanGetJobAs:'Data engineer'});


    }
  ngOnInit() {
  }
  onSendVeg(value1){
    // vegetables is nothing but your custom event (vegetables)
    this.vegetables.emit(value1);
  }

  onGetObject(){
this.newCourses.emit(this.courses);
  }

}
