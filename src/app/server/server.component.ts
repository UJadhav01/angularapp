import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
name:string='Hello Champ , u are great learner';
allowNewServer:boolean=false;
imgUrl='https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg'

serverCreationStatus:string='server not created'
userName:string;
serverName:string='server-1'
  serverStatus: string='online';
  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true
    }, 5000);

  }
  onServerCreated(){
    this.serverCreationStatus='server created successfully'
  }
  getServerStatus() {
    return this.serverStatus;
  }
  onClear(){
    this.userName=null
  }
  ngOnInit() {
  }

}
