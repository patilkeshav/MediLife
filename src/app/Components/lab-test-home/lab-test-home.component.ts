import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-lab-test-home',
  templateUrl: './lab-test-home.component.html',
  styleUrls: ['./lab-test-home.component.scss']
})
export class LabTestHomeComponent implements OnInit{
  constructor(){}
 ngOnInit(): void {
   
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
      items: 3
    }
  },
  nav:true
}
}

