import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../all-services/demo-service.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {

  movieSamples={};

  apiData={};
  apiDetails:any=[];
  constructor(private _serviceIn:DemoServiceService,
    private _demoService: DemoServiceService
    ) { }

  ngOnInit() {
    this.movieSamples=this._serviceIn.movie;

      this._demoService.getUsersData().subscribe(data => {
        console.log('getting data from api,for 10 users', data)
        this.apiData=data;
        console.log(this.apiData);

        this.apiDetails=data;
      });
      this._demoService.getPostUsersData().subscribe(userPostData=>{
        console.log('getting data from api for posts,for 100 users',userPostData);

      });
    }

  }


