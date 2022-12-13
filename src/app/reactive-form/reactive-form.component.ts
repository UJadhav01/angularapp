import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myReactiveForm:FormGroup;

  radioArray=[
    {id:'1',value:'Male'},
  {id:'2',value:'Female'},
  {id:'3',value:'Other'}
]

userNames:any = ['codemind', 'technology', 'codemind technology'];

  constructor() {
    this.onCreateForm();

   }

  ngOnInit() {
  }
  selectedValue="";

onCreateForm(){
  this.myReactiveForm=new FormGroup({
'userName':new FormControl('',[Validators.required,this.forbiddenNameValidator.bind(this)]),
'email':new FormControl('',[Validators.required,Validators.email]),
'course':new FormControl('Angular'),
'gender':new FormControl('Male')
  })}

  onSubmit(){
console.log(this.myReactiveForm);
  }


  forbiddenNameValidator(control: FormControl){
 if(this.userNames.indexOf(control.value) !==-1){
  return {'userNameNotAvailable':true}
 }
 return null;
  }
}
