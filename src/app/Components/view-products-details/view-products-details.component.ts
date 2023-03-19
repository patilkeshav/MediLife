import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-view-products-details',
  templateUrl: './view-products-details.component.html',
  styleUrls: ['./view-products-details.component.scss']
})
export class ViewProductsDetailsComponent implements OnInit {
SelectedDrugCode!:string|null;
ProductsDetails:any;
SelectedDrungCodeOFTopDeals!:string|null;
ProductDetailsOFTOpDealProduct:any;
getTopDealsCategoryData:any=[];
  constructor(private http:HttpService,private route:ActivatedRoute){
    this.SelectedDrugCode= this.route.snapshot.paramMap.get("drugCode")
    // this.SelectedDrungCodeOFTopDeals=this.route.snapshot.paramMap.get("drugCode")
  }
  ngOnInit(): void {
    this.getproductsDetailsById();
    // this.getProductsDetailsOfTopDeals();
  }
getproductsDetailsById(){
  if(this.SelectedDrugCode !=null){
  const endpoint ="top-deals?drugCode="+this.SelectedDrugCode
  this.http.getDataFromServer(endpoint).subscribe((response:any)=>{
    if(response && response.length>0){
     this.ProductsDetails=response[0]
     console.log("productsDetails",this.ProductsDetails)
    }
  },
  error=>{
    console.log(error)
  })
}
}
// getProductsDetailsOfTopDeals(){
//   const endpoint="top-deals-by-category?drugCode="+this.SelectedDrungCodeOFTopDeals;
//   this.http.getDataFromServer(endpoint).subscribe((el:any)=>{
//     if(el && el.length >0){
//      this.getTopDealsCategoryData=el;
//      console.log("topdeals by category",this.getTopDealsCategoryData)
//     }
//    },
//    error=>{
//      console.log(error)
//    })
//    }
}
