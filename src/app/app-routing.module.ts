import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MedicineHomeComponent } from './Components/medicine-home/medicine-home.component';
import { ViewAllTopdealtsComponent } from './Components/view-all-topdealts/view-all-topdealts.component';
import { ViewProductsDetailsComponent } from './Components/view-products-details/view-products-details.component';
import { PageNotFoundComponent } from './core/Components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"medicine",component:MedicineHomeComponent},
  {path:"view-All",component:ViewAllTopdealtsComponent},
  {path:"view-products-details/:drugCode",component:ViewProductsDetailsComponent},
  { path:'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  {path:"",redirectTo:"/home",pathMatch:'full'},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
