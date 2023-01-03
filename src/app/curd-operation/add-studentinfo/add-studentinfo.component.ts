import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StudentData } from 'src/app/models/studentData';
import { CurdServiceService } from '../curd-service.service';

@Component({
  selector: 'app-add-studentinfo',
  templateUrl: './add-studentinfo.component.html',
  styleUrls: ['./add-studentinfo.component.css']
})
export class AddStudentinfoComponent implements OnInit {
  subscription:Subscription;
  id: number;
  editMode=false;
  editedItemIndex:number;
  editedItem:StudentData;
  myForm:FormGroup;
  //for city values
  city=['Mumbai','Kolkata','Delhi'];
  radioArray=[
    {id:'1',value:'Male'},
  {id:'2',value:'Female'},
  {id:'3',value:'Other'}
]

   submitted:boolean=false;

   studentInformation:StudentData;
  constructor(

    private _httpClient:CurdServiceService) {
    this.onCreateRegistration();
  }

  ngOnInit() {



    this.subscription= this._httpClient.startedEditing
    .subscribe(
      (index:number)=>{
        this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem=this._httpClient.getStudent(index);
        this.myForm.controls['userDetails'].setValue({
          firstName:this.myForm.value.userDetails.firstName,
         lastName:this.myForm.value.userDetails.lastName,
         age:this.myForm.value.userDetails.age,
        email:this.myForm.value.userDetails.email,
         phone:this.myForm.value.userDetails.phone,
         city:this.myForm.value.userDetails.city,
         gender:this.myForm.value.userDetails.gender,
         password:this.myForm.value.userDetails.password,
         confirmPassword:this.myForm.value.userDetails.confirmPassword,
        })
      }
    );
  }


  onCreateRegistration(){
    this.myForm=new FormGroup({
      'userDetails':new FormGroup({
        'firstName':new FormControl('',[Validators.required,Validators.pattern("^(0)?[a-zA-Z]{5}$")]),
        'lastName':new FormControl('',[Validators.required,Validators.pattern("^(0)?[a-zA-Z]{1,10}$")]),
        'age':new FormControl('',[Validators.required,Validators.pattern("^(?:|1[7-9]|[2][0])$")]),
        'email':new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]+$")]),
        'phone':new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        'city':new FormControl('Mumbai'),
        'gender':new FormControl('Male'),
        'password':new FormControl('',[Validators.required]),
        'confirmPassword':new FormControl('',[Validators.required]),
      }),
    })
  }

  onStudRegistration(){
       //showing errors below each input field if submitting without enter data
       this.submitted=true;


const newStudInfo=new StudentData(this.myForm.value.userDetails.firstName,this.myForm.value.userDetails.lastName,
  this.myForm.value.userDetails.age,this.myForm.value.userDetails.email,this.myForm.value.userDetails.phone,
  this.myForm.value.userDetails.city,this.myForm.value.userDetails.gender,this.myForm.value.userDetails.password,
  this.myForm.value.userDetails.confirmPassword);

if(this.editMode){
this._httpClient.updateStudentInfo(this.editedItemIndex,newStudInfo).subscribe();
}else{
this._httpClient.addStudentInfo(newStudInfo).subscribe(studResult=>{
  console.log('data to server',studResult);
})}
this.editMode=false;
  }

onClear(){
  this.editMode=false;
}
ngOnDestroy(){
  this.subscription.unsubscribe();
}
}









