import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './Components/home/home.component';
import { MedicineHomeComponent } from './Components/medicine-home/medicine-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopDealsComponent } from './Components/top-deals/top-deals.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewAllTopdealtsComponent } from './Components/view-all-topdealts/view-all-topdealts.component';
import { TopDealsHeaderComponent } from './Components/top-deals-header/top-deals-header.component';
import { ViewProductsDetailsComponent } from './Components/view-products-details/view-products-details.component';
import { RouterModule } from '@angular/router';
import { LabTestHomeComponent } from './Components/lab-test-home/lab-test-home.component';
import { ViewAllLabTestsComponent } from './Components/view-all-lab-tests/view-all-lab-tests.component';
import { BookLabtestsComponent } from './Components/book-labtests/book-labtests.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicineHomeComponent,
    TopDealsComponent,
    ViewAllTopdealtsComponent,
    TopDealsHeaderComponent,
    ViewProductsDetailsComponent,
    LabTestHomeComponent,
    ViewAllLabTestsComponent,
    BookLabtestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
