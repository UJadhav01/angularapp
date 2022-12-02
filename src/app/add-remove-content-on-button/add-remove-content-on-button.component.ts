import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-remove-content-on-button',
  templateUrl: './add-remove-content-on-button.component.html',
  styleUrls: ['./add-remove-content-on-button.component.css']
})
export class AddRemoveContentOnButtonComponent implements OnInit {

  name:string;
  data:any[]=[];
    constructor() { }

    ngOnInit() {
    }
    addInputAndButton(i){
      this.data.push({name:i});
    }
    onRemove(indexValue){
  this.data.splice(indexValue,1);
    }
    onClear(){
      this.name='';
    }
}
