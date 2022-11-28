import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comparepass',
  templateUrl: './comparepass.component.html',
  styleUrls: ['./comparepass.component.css']
})
export class ComparepassComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }
  title = 'form validation';

  ngOnInit() {
  this.registerForm = this.formBuilder.group({

  password: ['', Validators.required],
  confirmPassword: ['', Validators.required],
 });

 }

  get formval() {
  return this.registerForm.controls;
  }
  login(){
  this.submitted = true;
  if (this.registerForm.invalid) {
  return;
  }
  alert('form fields are validated successfully!');
  }
}
