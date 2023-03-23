import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-view-all-topdealts',
  templateUrl: './view-all-topdealts.component.html',
  styleUrls: ['./view-all-topdealts.component.scss']
})
export class ViewAllTopdealtsComponent implements OnInit {
 getTopDealsCategoryData:any=[];
  constructor(private route:ActivatedRoute, private http:HttpService,private cart:CartService){

  }
  ngOnInit(): void {
    this.getTopDealByCategory();
  }
getTopDealByCategory(){
this.http.getDataFromServer("top-deals-by-category").subscribe((el:any)=>{
 if(el && el.length >0){
  this.getTopDealsCategoryData=el;
  console.log("topdeals by category",this.getTopDealsCategoryData)
 }
},
error=>{
  console.log(error)
})
}
addToCart(item:any){
  this.cart.addItemToCart(item)
}
}
