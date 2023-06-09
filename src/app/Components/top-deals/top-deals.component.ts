import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/core/services/http.service';
import { SharedService } from 'src/app/core/services/shared.service';
import { FilterPipe } from 'src/app/pipes/filterpipe.pipe';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent implements OnInit{
  @Input()
 topDeals:any[]=[];

  constructor(private http:HttpService,private cart:CartService){}
  ngOnInit(): void {
    this.getTopDeals();
  }
  getTopDeals(){
    this.http.getDataFromServer("top-deals").subscribe((el:any)=>{
  if(el && el.length>0){
this.topDeals=el;
console.log("top-deals", this.topDeals)
  }
    },
    error=>{
   console.log(error)
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
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
 // addToCart(item:any){
//
//     let cartItems:any=this.getDataFromLocalStorage();
//     cartItems.push(item);
// this.shared.emitItem(1)
//  localStorage.setItem("cartItems",JSON.stringify(cartItems));
//  this.shared.emitItem(cartItems.length)
  // }
  // getDataFromLocalStorage(){
  //   let items =localStorage.getItem("cartItems");
  //   if(items){
  //     items=JSON.parse(items)
  //     return items
  //   }
  //   else{
  //     return [];

  //   }


  addToCart(item:any){
this.cart.addItemToCart(item);
  }
  }



