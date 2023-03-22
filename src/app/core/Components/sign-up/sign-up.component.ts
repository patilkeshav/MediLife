import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { passwordvalidator } from '../Validators/confirmPass';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  SignUpform!: FormGroup;
  isGetOtp: boolean = false;
  otpCounter: number = 0;
  sub!: Subscription
  OtpGenerated!: number;
  isOtpVerified: boolean = false;
  isWrongOtp:boolean=false;
  isCounterStop:boolean=true;
  constructor(private Fb: FormBuilder, private http: HttpService) {

  }
  ngOnInit(): void {
    this.initializeForm();
    this.SignUpform.controls['Password'].valueChanges.subscribe((el:any)=>{
      this.SignUpform.controls['confirmPassword'].updateValueAndValidity();
    })
  }
  initializeForm() {
    this.SignUpform = this.Fb.group({
      "UserName": ['',[Validators.required]],
      "MobileNo": ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      "Password": ['',[Validators.required]],
      "confirmPassword": ['',[Validators.required,passwordvalidator]],
      "isMobileNoVerified": [false]
    })
  }
  getOtp() {
    this.isGetOtp = true;
    this.OtpGenerated = Math.floor(1000 + Math.random() * 9000)
    console.log("OTP", this.OtpGenerated)
    this.sub = interval(1000).subscribe((el: number) => {
      this.otpCounter = 60 - el;
      if (this.otpCounter === 0) {
        this.sub.unsubscribe();
      }
    })

  }
  SignUp() {
    this.http.postDataToServer("users",this.SignUpform.value).subscribe((response:any)=>{
      
    })
  }

  verifyOtp(Otp:any) {
    if (this.OtpGenerated == Otp) {
      this.isOtpVerified = true;
      this.sub.unsubscribe();
      this.isWrongOtp=false;
      this.isCounterStop=false;
     this.SignUpform.controls["isMobileNoVerified"].setValue(true);
    }
    else{
      this.isOtpVerified=false;
      this.isWrongOtp=true;
    }
  }
  onSubmit(){
      this.SignUpform.reset()
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
