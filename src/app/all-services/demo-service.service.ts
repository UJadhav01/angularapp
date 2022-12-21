import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  constructor(private httpClient: HttpClient){}

  movie=[
    { title: '3 Idiots', director: 'Rajkumar', cast: 'Amir', releaseDate: '2007' },
    { title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2022'},
    { title: 'KGF', director: 'RockBhai', cast:'Yash', releaseDate: '2019'}

  ]


  display(){
    alert('Subscribe successfully');
  }

  getUsersData()
  {
   return this.httpClient.get(''+environment.apiURL+'users');
  }

    getPostUsersData()
  {
   return this.httpClient.get(+environment.apiURL+'posts');
  }

}
