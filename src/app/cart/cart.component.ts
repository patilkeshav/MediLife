import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
finalOrder:Order=new Order();
  constructor(private cart:CartService,private router:Router){}
ngOnInit(): void {
  
  let cartItems=this.cart.getDataFromLocalStorage();
  this.setCartItems(cartItems);
  this.calculateTotalPrice();
  console.log("cartItem",cartItems)
  console.log("final order",this.finalOrder)
}

setCartItems(cartItems:any){
  let productArr:Product[] = [];
  cartItems.forEach((el:any) => {
    let productObj = new Product();
    productObj.productName = el.description;
    productObj.brand = el.brand;
    productObj.type = el.type;
    productObj.drugCode = el.drugCode;
    productObj.actualPrice = el.actualPrice ;
    productObj.discountedPrice = el.discountPrice;
    productObj.quantity = 1 ;
    productObj.ProductTotalPrice=Number(productObj.discountedPrice) * Number(productObj.quantity);
    productArr.push(productObj); 
  });
this.finalOrder.products=productArr;

}
calculateTotalPrice(){ 
   this.finalOrder.totalAmount=0;
   this.finalOrder.totalDiscount=10;
   this.finalOrder.products.forEach((el:Product)=>{
    this.finalOrder.totalAmount+=Number(el.ProductTotalPrice)
   })
   this.finalOrder.finalAmountToPay=this.finalOrder.totalAmount-this.finalOrder.totalDiscount;
}

changeQuantity(index:number,action:string){
  let productItem = this.finalOrder.products[index];
  if(action == 'Increment'){
    productItem.quantity ++ ;
  }else {
    productItem.quantity -- ;
    if(productItem.quantity < 1){
      let res = confirm("Are You Sure");
      if(res){
        this.finalOrder.products.splice(index,1);
      }else {
        productItem.quantity++
      }
    }
  }
  productItem.ProductTotalPrice = Number(productItem.discountedPrice) * Number(productItem.quantity);
  this.calculateTotalPrice();
}

checkout(){
  this.cart.setOrderDetails(this.finalOrder);
  this.router.navigate(['/cart/booking-details'])
}
}

class Order {
  orderId!:number;
  // fullName!:string;
  // mobileNo!:number;
  // emailId!:string;
  // address!:string;
  products!:Product[];
 totalAmount!:number;
 totalDiscount!:number;
 finalAmountToPay!:number;
 deliveryType!:string;


}
// class address{
//   line1!:string;
//   line2!:string;
//   city!:string;
//   state!:string;
//   pincode!:number;
//   country!:string
//}
class Product {
  drugCode!:string;
  productName!:string
  brand!:string;
  actualPrice!:number;
  discountedPrice!:number;
  quantity!:number;
  ProductTotalPrice!:number;
  type!:string;
  orderId: any;
}