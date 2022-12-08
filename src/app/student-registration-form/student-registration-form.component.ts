import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-registration-form',
  templateUrl: './student-registration-form.component.html',
  styleUrls: ['./student-registration-form.component.css']
})
export class StudentRegistrationFormComponent implements OnInit {
  NgForm=NgForm;

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    console.log(form);

      }

}
