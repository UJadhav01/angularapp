import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLoggedIn(userEmail:string,pass:string){
    if(userEmail=='test@gmail.com' && pass=='test123'){
      localStorage.setItem('userEmail','test@gmail.com');
      return true;
    }else{
      return false;
    }
  }
}
