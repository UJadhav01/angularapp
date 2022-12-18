import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf4thassignment',
  templateUrl: './tdf4thassignment.component.html',
  styleUrls: ['./tdf4thassignment.component.css']
})
export class Tdf4thassignmentComponent implements OnInit {
  //for password checking purpose
  password:string;
  confirmPassword:string;

  //for showing error if submit form without filling
  submitted:boolean=false;

  //for storing user input information
  arrayOfUser=[];
  constructor() { }

  //for setting select as default=Advance
  defaultSelected='Advance';

  //to access subscription dynamically
  list=['Basic','Advance','Pro']

  ngOnInit() {
  }

onLogin(loginForm:NgForm){
//showing errors below each input field if submitting without enter data
this.submitted=true;

//to show user data into console
if(loginForm.value !== ''){
  console.log(loginForm.value);
}
//pushing user data into arrayOfUser
this.arrayOfUser.push(loginForm.value);

  }
  onPrint(){
    window.print();

  }
}
