import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { BbFinanceService } from 'src/app/all-services/bb-finance.service';

@Component({
  selector: 'app-bb-fianance',
  templateUrl: './bb-fianance.component.html',
  styleUrls: ['./bb-fianance.component.css']
})
export class BbFiananceComponent implements OnInit {

constructor(private _bbFinance:BbFinanceService) { }
bbQuote:any=[];
bbNews:any=[];

  ngOnInit() {
    this._bbFinance.getBBFinanceAPI().subscribe(result=>{
      console.log(result);
      this.bbQuote=result.news;
      this.bbNews=result.quote;
    });


  }

}


