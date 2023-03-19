import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-medicine-home',
  templateUrl: './medicine-home.component.html',
  styleUrls: ['./medicine-home.component.scss']
})
export class MedicineHomeComponent implements  OnInit{
 pincode:string="";
 pincodeDetails:any;
 displayPincodeCity:boolean=true;
 displayErrorMsg:boolean=false;
 ShowDefaultPincode:boolean=true;
 @ViewChild("closeButton")closeButton!:ElementRef
  constructor(private http:HttpService){}
  ngOnInit(): void {
    
  }
  verifyPinCode(){
    const endpoint="pin-code-details?"+"pincode="+ this.pincode ;
    this.http.getDataFromServer(endpoint).subscribe((el:any)=>{
      if(el && el.length >0){
       this.pincodeDetails=el[0];
       this.displayErrorMsg=false;
       this.ShowDefaultPincode=false;
       this.displayPincodeCity=true
       this.closeButton.nativeElement.click()
      }
      else{

        this.displayErrorMsg=true;
         this.ShowDefaultPincode=true;
         this.displayPincodeCity=false
      }
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav:true
  }
}

