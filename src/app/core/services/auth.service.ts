import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  getUsersDataFromLocalStorage(){
    let userData:any;
  userData=localStorage.getItem("userDetails");
    if(userData){
      userData=JSON.parse(userData);
    }
    return userData;
  }
  // deletDataFromLocalStorage(){
  //   let userData :any;
  //   userData=localStorage.removeItem("userDetails");

  //   }
  }


