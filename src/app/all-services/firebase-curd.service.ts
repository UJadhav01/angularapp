import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentData } from '../models/studentData';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCurdService {

   url='https://my-angular-app-f76b1-default-rtdb.firebaseio.com/';
  constructor(private _httpClient:HttpClient) { }

  // createPost(){
  //   let sendData={
  //     title:'this is angular 8 curd',
  //     content:'this is firebase curd operations'
  //   }

  // return  this._httpClient.post(this.url+'post.json',sendData);
  // }

  sendObjectPost(studentInformation:StudentData){
    return this._httpClient.post(this.url+'post.json',studentInformation);
  }

  getObjectPost(){
    return this._httpClient.get(this.url+'post.json');
  }

}
