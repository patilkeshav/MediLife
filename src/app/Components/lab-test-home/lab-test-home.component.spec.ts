import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTestHomeComponent } from './lab-test-home.component';

describe('LabTestHomeComponent', () => {
  let component: LabTestHomeComponent;
  let fixture: ComponentFixture<LabTestHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabTestHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabTestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
