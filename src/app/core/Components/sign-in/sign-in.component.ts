import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
SignInForm!:FormGroup;
LoginData:any;
isNewUser:boolean=false;
 @Output() eventAction:EventEmitter<boolean>=new EventEmitter(false)
  constructor( private Fb:FormBuilder, private http:HttpService){ }
  ngOnInit(): void {
    this.initializeForm()
  }
  initializeForm(){
    this.SignInForm=this.Fb.group({
      "UserName":['',[Validators.required]],
      "Password":[]
    })
  }
  SignIN(){
    const httpParams=new HttpParams()
                    .set("UserName",this.SignInForm.controls['UserName'].value)
                    .set("Password",this.SignInForm.controls['Password'].value)

     this.http.getDataFromServerByQueryParam("users",httpParams).subscribe((el:any)=>{
      if(el && el.length >0){
       this.LoginData=el;
       this.isNewUser=false;
       this.eventAction.emit(true);
       const token ="Betytoken99jys";
       localStorage.setItem("auth-token",token);
       localStorage.setItem("userDetails",JSON.stringify(el[0]));
      } else{
        this.isNewUser=true;

      }
     })
  }}
