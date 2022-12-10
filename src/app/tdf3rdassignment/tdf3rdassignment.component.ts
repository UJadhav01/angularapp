import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserData } from '../models/userData';

@Component({
  selector: 'app-tdf3rdassignment',
  templateUrl: './tdf3rdassignment.component.html',
  styleUrls: ['./tdf3rdassignment.component.css']
})
export class Tdf3rdassignmentComponent implements OnInit {
  userDataObject=new UserData();
  submit:boolean=false;

  dtToday = new Date();

  month = this.dtToday.getMonth() + 1;
  day = this.dtToday.getDate();
 year = this.dtToday.getFullYear();

startDate=this.year.toString()+'-'+this.month.toString()+'-'+this.day.toString();
  constructor() {

   }

  ngOnInit() {

}
  userArray=[];
  onRegister(myForm:NgForm){
    this.submit=true;
    console.log(`Registration done successfully`);

    this.userDataObject.address1=myForm.value.userAddress.address1;
    this.userDataObject.address2=myForm.value.userAddress.address2;
    this.userDataObject.city=myForm.value.userAddress.city;
    this.userDataObject.state=myForm.value.userAddress.state;
    this.userDataObject.zip=myForm.value.userAddress.zip;
    console.log(myForm.value.userAddress.zip);

    this.userDetails(this.userDataObject);
    this.userArray.push(this.userDataObject);
  }

userDetails(user:UserData){
console.log(user);
  }
}
