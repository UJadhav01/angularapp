import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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


    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'userDetails' : {
          'userName': 'Codemind1122',
          'email': 'test@gmail.com'
        }
      })
    }, 3500);

  }
  selectedValue="";

onCreateForm(){
  this.myReactiveForm=new FormGroup({
    'userDetails':new FormGroup({
      'userName':new FormControl('',[Validators.required,this.forbiddenNameValidator.bind(this)]),
      'email':new FormControl('',[Validators.required,Validators.email],this.NaEmails),
    }),

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
