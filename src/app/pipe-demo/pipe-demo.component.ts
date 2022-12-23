import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  date=new Date();

  amount:number=2500;
  decimalNumber:number=99.765;
  jsonpipe = {id:1,name: 'shiv', age: '2.5', address:{add1: 'Pandharpur', add2: 'Pune'}};

  seasons=['Summer','Rainy','Winter'];

  name:string='Shivanshi';

  greeting:string='Good afternoon , How are you ? ';

  vowelsString:string='Hello, My name is surya';

  stringToFindWords='Hello, My name is surya, Good afternoon, How are you?'
  constructor() { }

  ngOnInit() {
  }

}
