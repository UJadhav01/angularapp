import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private _authService:AuthService,private _router:Router) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    if(!form.valid){
      return;
    }
  }
  onCheckLogin(userEmail,pass){
var result=this._authService.isUserLoggedIn(userEmail,pass);
if(result==true){
  window.alert('Logging successfully');
  this._router.navigate(['/shop-comp']);
}else{
  window.alert('please enter valid email and password');

}
  }
}
