export class StudentData{
public firstName:string;
public lastName:string;
public age:number;
public email:string;
public phone:number;
public city:string;
public gender:string;
public password:string;
public confirmPassword:string;
constructor(firstName:string,lastName:string,age:number,email:string,phone:number,city:string,gender:string,
  password:string, confirmPassword:string){
this.firstName=firstName;
this.lastName=lastName;
this.age=age;
this.email=email;
this.phone=phone;
this.city=city;
this.gender=gender;
this.password=password;
this.confirmPassword=confirmPassword;
}

}
