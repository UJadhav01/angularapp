import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserData } from '../models/userData';

@Component({
  selector: 'app-tdfsecondass',
  templateUrl: './tdfsecondass.component.html',
  styleUrls: ['./tdfsecondass.component.css']
})
export class TdfsecondassComponent implements OnInit {

  userDataObject=new UserData();
  submit:boolean=false;
  constructor() { }

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
