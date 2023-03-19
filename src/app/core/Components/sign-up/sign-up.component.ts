import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit,OnDestroy{
  SignUpform!:FormGroup;
  isGetOtp:boolean=false;
  otpCounter:number=0;
  sub!:Subscription
 constructor(private Fb:FormBuilder,private http:HttpService){
 
 }
 ngOnInit(): void {
   this.initializeForm();
 }
 initializeForm(){
 this.SignUpform=this.Fb.group({
  "UserName":[],
  "MobileNo":[],
  "Password":[],
  "confirmPassword":[],
  "isMobileNoVerified":[false]
 })}
 getOtp(){
  this.isGetOtp=true;
  this.sub =interval(1000).subscribe((el:number)=>{
    this.otpCounter=60-el;
    if(this.otpCounter===0){
      this.sub.unsubscribe();
     }
  })
 
 }
 SignUp(){
 }
 verifyOtp(){
  this.sub.unsubscribe();
 }
 ngOnDestroy(): void {
   this.sub.unsubscribe();
 }
}
