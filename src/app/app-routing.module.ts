import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LabTestHomeComponent } from './Components/lab-test-home/lab-test-home.component';
import { MedicineHomeComponent } from './Components/medicine-home/medicine-home.component';
import { ViewAllLabTestsComponent } from './Components/view-all-lab-tests/view-all-lab-tests.component';
import { ViewAllTopdealtsComponent } from './Components/view-all-topdealts/view-all-topdealts.component';
import { ViewProductsDetailsComponent } from './Components/view-products-details/view-products-details.component';
import { PageNotFoundComponent } from './core/Components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"medicine",component:MedicineHomeComponent},
  {path:"view-All",component:ViewAllTopdealtsComponent},
  {path:"view-products-details/:drugCode",component:ViewProductsDetailsComponent},
  {path:"lab-test-home",component:LabTestHomeComponent},
  {path:"view-labtests",component:ViewAllLabTestsComponent},
  { path:'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  {path:"",redirectTo:"/home",pathMatch:'full'},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
