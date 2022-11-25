import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent implements OnInit {
  isShow:boolean=false
  title:string='top 3 movies'
  movie:Movie[]=[
    { title: '3 Idiots', director: 'Rajkumar', cast: 'Amir', releaseDate: '2007' },
    { title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2022'},
    { title: 'KGF', director: 'RockBhai', cast:'Yash', releaseDate: '2019'}

  ]
    constructor() {
      setTimeout(()=>{
  this.isShow=true
      },5000)
    }

  ngOnInit() {
  }

}
