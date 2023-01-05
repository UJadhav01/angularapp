import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RxjsOperatorService {

  constructor() { }

  arr=[
{id:1,name:'Shivanshi',age:3},
{id:2,name:'Aditya',age:17},
{id:3,name:'Aarya',age:15}
];

gender=[
  {id:1,value:'male',name:'Aditya'},
{id:2,value:'female',name:'Shivanshi'},
{id:3,value:'male',name:'Kartik'},
{id:4,value:'female',name:'Arya'}];
}
