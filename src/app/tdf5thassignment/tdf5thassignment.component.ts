import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { StudentData } from '../models/studentData';
import { onNotSavedChanges } from '../auth/not-saved-changes.guard';
import { Observable } from 'rxjs';
import { CanDialogService } from '../auth/can-dialog.service';

@Component({
  selector: 'app-tdf5thassignment',
  templateUrl: './tdf5thassignment.component.html',
  styleUrls: ['./tdf5thassignment.component.css']
})
export class Tdf5thassignmentComponent implements OnInit {

  //for name length checking purpose
  firstName:string;
  lastName:string;

  //for age checking
  age:number;

  //for phone
  phone:number;

  //for city values
  defaultSelectedCity='Mumbai'
  city=['Mumbai','Kolkata','Delhi'];


  defaultGender:string='Male'
  radioArray=[
    {id:'1',value:'Male'},
  {id:'2',value:'Female'},
  {id:'3',value:'Other'}
]

   //for password checking purpose
   password:string;
   confirmPassword:string;

   submitted:boolean=false;

   studentInformation;
   userArray=[];
  constructor(public dialogService: CanDialogService) {
  }


  ngOnInit() {
  }
  myForm:NgForm
  onStudRegistration(myForm){
    //showing errors below each input field if submitting without enter data
    this.studentInformation=new StudentData(this.myForm.value.userDetails.firstName,this.myForm.value.userDetails.lastName,
      this.myForm.value.userDetails.age,this.myForm.value.userDetails.email,this.myForm.value.userDetails.phone,
      this.myForm.value.userDetails.city,this.myForm.value.userDetails.gender,this.myForm.value.userDetails.password,
      this.myForm.value.userDetails.confirmPassword);

this.submitted=true;

this.studentInformation.firstName=myForm.value.userDetails.firstName;
  this.studentInformation.lastName=myForm.value.userDetails.lastName;
  this.studentInformation.age=myForm.value.userDetails.age;
  this.studentInformation.email=myForm.value.userDetails.email;
  this.studentInformation.phone=myForm.value.userDetails.phone;
  this.studentInformation.city=myForm.value.userDetails.city;
  this.studentInformation.gender=myForm.value.userDetails.gender;
  this.studentInformation.password=myForm.value.userDetails.password;
  this.studentInformation.confirmPassword=myForm.value.userDetails.firstName;

  this.userArray.push(this.studentInformation);


//to show user data into console
if(myForm.value !== ''){
  console.log(myForm.value);
}
  }
  onUnsavedChanges():Observable<boolean> | Promise<boolean> | boolean{
    if (this.myForm.dirty) {

      return this.dialogService.confirm('Do you want discard changes');
  }
  return true;
}
  }

