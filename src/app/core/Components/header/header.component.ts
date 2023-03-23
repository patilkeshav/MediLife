import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
   actionName:string="SignIn"
   @ViewChild('closeBtn')closeBtn!:ElementRef;
   isUserLoggedIn:boolean=false;
   userDetails:any;
   cartCounter!:Observable<number>
   // cartCounter:number=0;
  constructor(private auth:AuthService,private router:Router,private shared:SharedService){}
  ngOnInit(): void {
    this.shared.cartCountetObs.subscribe((el:any)=>{
      this.cartCounter = el ;})
    let userData=this.auth.getUsersDataFromLocalStorage();
    if(userData){
      this.isUserLoggedIn=true;
      this.userDetails=userData;
    }
  }
  ChangeAction(action:string){
    this.actionName=action; 
  }
  getAction(flag:any){
    if(flag){
   this.closeBtn.nativeElement.click()
   this.isUserLoggedIn=true;
   this.userDetails=this.auth.getUsersDataFromLocalStorage();
  }}
  // logoutAction(){
  //  this.userDetails=this.auth.deletDataFromLocalStorage();
  //  this.isUserLoggedIn=true;
  //  this.router.navigate(['/home'])
  // }
}

