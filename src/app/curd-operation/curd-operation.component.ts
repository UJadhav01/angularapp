import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StudentData } from '../models/studentData';
import { CurdServiceService } from './curd-service.service';

@Component({
  selector: 'app-curd-operation',
  templateUrl: './curd-operation.component.html',
  styleUrls: ['./curd-operation.component.css']
})
export class CurdOperationComponent implements OnInit {
  ingredients:StudentData[];
  private subscription:Subscription;
    constructor(private slservice:CurdServiceService,
    ) { }

    ngOnInit(){
      this.ingredients=this.slservice.getStudData();
      this.subscription=this.slservice.studentDataChanged
      .subscribe(
        (ingredients:StudentData[])=>{
        this.ingredients=ingredients;
      });
    }

    onEditItem(index:number){
  this.slservice.startedEditing.next(index);
    }
    onDeleteItem(index:number){
    //  this.ingredients.splice(i,1);
     this.slservice.deleteStudentInfo(index);
    }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
