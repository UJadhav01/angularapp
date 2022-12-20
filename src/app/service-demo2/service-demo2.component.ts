import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-service-demo2',
  templateUrl: './service-demo2.component.html',
  styleUrls: ['./service-demo2.component.css']
})
export class ServiceDemo2Component implements OnInit {
  movieSamples={};

  constructor(private _serviceIn:DemoServiceService) { }

  ngOnInit() {
    this.movieSamples=this._serviceIn.movie;

  }

}
