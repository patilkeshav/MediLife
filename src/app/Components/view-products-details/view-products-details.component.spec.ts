import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsDetailsComponent } from './view-products-details.component';

describe('ViewProductsDetailsComponent', () => {
  let component: ViewProductsDetailsComponent;
  let fixture: ComponentFixture<ViewProductsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
