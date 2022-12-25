import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { prototype } from 'events';
import { StudentData } from '../models/studentData';

@Component({
  selector: 'app-phone-mask',
  templateUrl: './phone-mask.component.html',
  styleUrls: ['./phone-mask.component.css']
})
export class PhoneMaskComponent implements OnInit {

  public phoneMask = [/[1-9]/, /\d/, '-', /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  overwrite = false;



  form: FormGroup;
   constructor(private _fb:FormBuilder) {
    this.form=this._fb.group({
      phone1:[''],
      phone2:['']
    })
  }
  ngOnInit() {
  }

  displayedValue;
  value;
  onInput(event: Event): void {
    this.value = +(<HTMLInputElement>event.target).value.split('-').join('');
  }

  }
