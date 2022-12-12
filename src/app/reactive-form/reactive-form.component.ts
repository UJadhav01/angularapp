import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myReactiveForm:FormGroup;

  constructor() {
    this.onCreateForm();

   }

  ngOnInit() {
  }
onCreateForm(){
  this.myReactiveForm=new FormGroup({
'userName':new FormControl(''),
'email':new FormControl(''),
  })}

  onSubmit(){
console.log(this.myReactiveForm);

  }
}
