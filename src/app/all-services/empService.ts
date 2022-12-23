import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";


@Injectable({
  providedIn:'root'
})
export class EmpService{

  //userName=new Subject<any>();
  // userName=new BehaviorSubject('Angular');

  constructor(){}
  // employee=new Subject<Object>();
  employee=new Subject<object>();


  }


