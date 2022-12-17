import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


class UserData{
  name:string;
  email:string;
  gender:string;
  courses:string;
}

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],

})
export class SimpleFormComponent implements OnInit {
  constructor() { }
  defaultselected='Angular'
  submitData=false;
  username:string;
  userData=new UserData();
  defaultGender:string='Male'
  radioArray=[
    {id:'1',value:'Male'},
  {id:'2',value:'Female'},
  {id:'3',value:'Other'}
]
  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    this.submitData=true;
console.log(form);
this.userData.name=form.value.userDetails.username;
this.userData.email=form.value.userDetails.email;
this.userData.courses=form.value.course;
this.userData.gender=form.value.gender;
form.reset();
form.controls['course'].setValue('Angular');
form.control.get('course').setValue('Angular');
form.control['gender'].setValue('Female');
form.control.get('gender').setValue('Female');


    // this.onSaveData(this.userData);

  }
onSaveData(uData:UserData){
console.log(uData);

}
}
