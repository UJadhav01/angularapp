import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Observable } from 'rxjs';
import { StudentData } from '../models/studentData';

@Injectable({
  providedIn: 'root'
})
export class CurdServiceService {
  [x: string]: any;
  url='https://my-angular-app-f76b1-default-rtdb.firebaseio.com/';

  studentDataChanged=new Subject<StudentData[]>();
  startedEditing=new Subject<number>();

  constructor(private _httpClient:HttpClient) { }

  private studData:StudentData[]=[];

  setStudData(studData:StudentData[]){
    this.studData=studData;
    this.studentDataChanged.next(this.studData.slice());
  }

  getStudData(){
    return this.studData.slice();
  }
  getStudent(index:number){
    return this.studData[index];
  }
  addStudentInfo(studInfo:StudentData){
    this.studData.push(studInfo);
    this.studentDataChanged.next(this.studData.slice());
    return this._httpClient.post(this.url+'post.json',this.studData);

  }
  updateStudentInfo(index:number,newIngredient:StudentData){
    this.studData[index]=newIngredient;
    this.studentDataChanged.next(this.studData.slice());
    return this._httpClient.put(this.url+'post.json',this.studData);
  }
  deleteStudentInfo(index:number){
    this.studData.splice(index,1);
    this.studentDataChanged.next(this.studData.slice());
    this._httpClient.delete(this.url+'post.json',this.index);
    this._httpClient.delete('StudentData/' + index);


  }

  getObjectPost():Observable<any>{
    return this._httpClient.get(this.url+'post.json');
  }
}





