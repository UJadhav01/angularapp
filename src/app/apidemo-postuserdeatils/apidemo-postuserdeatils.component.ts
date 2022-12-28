import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoServiceService } from '../all-services/demo-service.service';
import { userDetailsPost } from '../apidemo-post/apidemo-post.component';

@Component({
  selector: 'app-apidemo-postuserdeatils',
  templateUrl: './apidemo-postuserdeatils.component.html',
  styleUrls: ['./apidemo-postuserdeatils.component.css']
})
export class ApidemoPostuserdeatilsComponent implements OnInit {
  // for storing api data
  getPostApiData:userDetailsPost[]=[];
  constructor(
     private _postService:DemoServiceService,
     private _route: ActivatedRoute) { }

  ngOnInit() {
    //snapshot recognize the current activated route with parameter
    let id = this._route.snapshot.params['id'];
    this._postService.getPostUsersDataId(id).subscribe(res => {
      console.log('get post by id', res);
      this.getPostApiData.push(res);
    });

  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
