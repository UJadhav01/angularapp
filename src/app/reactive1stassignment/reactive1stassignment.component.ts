import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { StudentData } from '../models/studentData';
import { Observable } from 'rxjs/internal/Observable';
import { CanDialogService } from '../auth/can-dialog.service';
import { FirebaseCurdService } from '../all-services/firebase-curd.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reactive1stassignment',
  templateUrl: './reactive1stassignment.component.html',
  styleUrls: ['./reactive1stassignment.component.css']
})
export class Reactive1stassignmentComponent implements OnInit {

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
   userArray=[];
  constructor(
    public dialogService: CanDialogService,
    private _httpClient:FirebaseCurdService) {
    this.onCreateRegistration();
  }

  ngOnInit() {
    this._httpClient.getObjectPost().pipe(
      map(
        res=>{
          const arr=[];
          for(const key in res){
            if(res.hasOwnProperty(key)){
              arr.push({...res[key],id:key})
            }
          }
          return arr;
        }
      )
    )
    .subscribe(studentData=>{
      console.log('data from firebase server',studentData);
    })
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
       this.studentInformation=new StudentData();

       this.submitted=true;

         this.studentInformation.firstName=this.myForm.value.userDetails.firstName;
         this.studentInformation.lastName=this.myForm.value.userDetails.lastName;
         this.studentInformation.age=this.myForm.value.userDetails.age;
         this.studentInformation.email=this.myForm.value.userDetails.email;
         this.studentInformation.phone=this.myForm.value.userDetails.phone;
         this.studentInformation.city=this.myForm.value.userDetails.city;
         this.studentInformation.gender=this.myForm.value.userDetails.gender;
         this.studentInformation.password=this.myForm.value.userDetails.password;
         this.studentInformation.confirmPassword=this.myForm.value.userDetails.confirmPassword;

         this.userArray.push(this.studentInformation);
        this._httpClient.sendObjectPost(this.studentInformation).subscribe(studResult=>{
          console.log('data to server',studResult);

        })

    console.log(this.myForm);
  }

  onUnsavedChanges():Observable<boolean> | Promise<boolean> | boolean{
    if (this.myForm.dirty) {

      return this.dialogService.confirm('You have unsaved changes, Do you want leave');
  }
  return true;
}

}
