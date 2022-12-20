import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myReactiveForm:FormGroup;

  radioArray=[
  {
    id:'1',value:'Male'
  },
  {
    id:'2',value:'Female'
  },
  {
    id:'3',value:'Other'
  }
]

userNames:any = ['codemind', 'technology', 'codemind technology'];

  constructor(private _fb:FormBuilder) {
    this.onCreateForm();
   }

  ngOnInit() {
// setTimeout(() => {
//       this.myReactiveForm.setValue({
//         'userDetails' : {
//           'userName': 'Codemind1122',
//           'email': 'test@gmail.com'
//         },
//         'course': 'HTML',
//         'gender': 'Male'
//       })
//     }, 3500);


//for setting default values
    // setTimeout(() => {
    //   this.myReactiveForm.patchValue({
    //     'userDetails' : {
    //       'userName': 'Codemind1122',
    //       'email': 'test@gmail.com'
    //     }
    //   })
    // }, 3500);

  }
  selectedValue="";

onCreateForm(){
  this.myReactiveForm=new FormGroup({
    'userDetails':new FormGroup({
      'userName':new FormControl('',[Validators.required,this.forbiddenNameValidator.bind(this)]),
      'email':new FormControl('',[Validators.required,Validators.email],this.NaEmails),
    }),

'course':new FormControl('Angular'),
'gender':new FormControl('Male'),
'skills':new FormArray([new FormControl()])
  })}

  // this.myReactiveForm = this._fb.group({
  //   userDetails: this._fb.group({
  //     username: ['', Validators.required],
  //     email: ['', Validators.required]
  //   }),
  //   course: ['Angular'],
  //   gender: ['Male'],
  //   skills: this._fb.array([])
  // }),

  OnAddSkills(){
    (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl());
  }

  OnRemoveSkills(removeSkill){
    (<FormArray> this.myReactiveForm.get('skills')).removeAt(removeSkill);
  }

  onSubmit(){
console.log(this.myReactiveForm);
  }


  forbiddenNameValidator(control: FormControl){
 if(this.userNames.indexOf(control.value) !==-1){
  return {'userNameNotAvailable':true}
 }
 return null;
  }

  NaEmails(control:FormControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'codemindtechnology@gmail.com'){
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000);
    })
    return myResponse;
  }

}
