import { Component, OnInit } from '@angular/core';
export class EmployeeData{
  id:number;
  name:string;
  dob:string;
  gender:string;
  salary:number;
  company:string;
}
@Component({
  selector: 'app-filter-pipe-ass',
  templateUrl: './filter-pipe-ass.component.html',
  styleUrls: ['./filter-pipe-ass.component.css']
})
export class FilterPipeAssComponent implements OnInit {

  constructor() { }

  EmployeeInfo:EmployeeData[]=[
    {id:1, name:'Aditya',dob:'1/3/2006',gender:'Male',salary:45000,company:'L&T'},
    {id:2, name:'Shivanshi',dob:'4-11-1998',gender:'Female',salary:77000,company:'Realince'},
    {id:3, name:'Vishal',dob:'8/8/1987',gender:'Male',salary:65000,company:'TCS'},
    {id:4, name:'Rajveer',dob:'3/5/1992',gender:'Male',salary:37000,company:'Wipro'},
    {id:5, name:'Vishakha',dob:'10/10/1995',gender:'Female',salary:40000,company:'Accenture'},
    {id:6, name:'Advik',dob:'12/4/2003',gender:'Male',salary:55000,company:'Capgemini'},
    {id:7, name:'Devika',dob:'7/9/2006',gender:'Female',salary:67000,company:'Infy'},
    {id:8, name:'Tanisha',dob:'2/12/1997',gender:'Female',salary:80000,company:'Airtel'},
    {id:9, name:'Sandeep',dob:'11/6/1999',gender:'Male',salary:100000,company:'Google'},

  ];

  ngOnInit() {
  }

}
