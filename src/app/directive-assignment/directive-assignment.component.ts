import { Component, OnInit } from '@angular/core';
import { Courses } from '../models/courses';

@Component({
  selector: 'app-directive-assignment',
  templateUrl: './directive-assignment.component.html',
  styleUrls: ['./directive-assignment.component.css']
})
export class DirectiveAssignmentComponent implements OnInit {
courses:Courses[]=[
{courseId:1,courseName:'Complete front-end web development',courseContent:'HTML,CSS,JS,Angular',youCanGetJobAs:'Front-end developer'},
{courseId:2,courseName:'Complete back-end development',courseContent:'any lag. Java,Python ,C#,ruby',youCanGetJobAs:'back-end developer'},
{courseId:3,courseName:'Azure',courseContent:'database/data mining/data warehousing tools etc.',youCanGetJobAs:'Data engineer'}];

courseNames:Courses[]=[{courseName:'Angular Developer'},{courseName:"Software testing"},{courseName:'Java Developer'},{courseName:'React Developer'}]
selectedCourse:string;

constructor() { }

onSelectedCourse(event){
this.selectedCourse=event.target.value;
}
  ngOnInit() {
  }

}
