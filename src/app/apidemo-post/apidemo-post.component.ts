import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../all-services/demo-service.service';

export class userDetailsPost{
userId:number;
id:number;
title:string;
body:string;
}
@Component({
  selector: 'app-apidemo-post',
  templateUrl: './apidemo-post.component.html',
  styleUrls: ['./apidemo-post.component.css']
})
export class ApidemoPostComponent implements OnInit {

  arrForUserData:userDetailsPost[]=[];
  constructor(private _demoservice:DemoServiceService) { }

  ngOnInit() {
    this._demoservice.getPostUsersData()
    .subscribe(arg =>{
console.log('api data fro  post',arg);
this.arrForUserData=arg;
    }  );
  {

  }
  }

}
