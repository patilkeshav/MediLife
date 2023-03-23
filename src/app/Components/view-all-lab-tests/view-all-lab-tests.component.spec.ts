import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllLabTestsComponent } from './view-all-lab-tests.component';

describe('ViewAllLabTestsComponent', () => {
  let component: ViewAllLabTestsComponent;
  let fixture: ComponentFixture<ViewAllLabTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllLabTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllLabTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
