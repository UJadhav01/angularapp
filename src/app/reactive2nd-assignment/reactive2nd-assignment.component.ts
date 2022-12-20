import { AbstractControl, ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive2nd-assignment',
  templateUrl: './reactive2nd-assignment.component.html',
  styleUrls: ['./reactive2nd-assignment.component.css']
})
export class Reactive2ndAssignmentComponent implements OnInit {
submitted:boolean=false;

projectForm:FormGroup;
projectNames=['Test','test'];
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit() {
    this.projectForm=this._formBuilder.group({
      'projectInfo':this._formBuilder.group({

      'projectName':['',[Validators.required],[this.namevalidate]],
      'email':['',[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]+$")]],
      'proStatus':['Please select project status...',Validators.required],
    }),
    });
  }



  namevalidate(control:FormControl): Promise<any>{
      const myResponse = new Promise<any>((resolve) => {
        if(control.value===('test') || control.value===('Test')){
          resolve({'notallowed': true})
          } else {
            resolve(null)
          }
      });
      return myResponse;
    }

  onSubmit(){
this.submitted=true;
console.log(this.projectForm);

  }
}
