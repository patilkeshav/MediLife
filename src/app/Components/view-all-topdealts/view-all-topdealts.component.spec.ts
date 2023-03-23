import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTopdealtsComponent } from './view-all-topdealts.component';

describe('ViewAllTopdealtsComponent', () => {
  let component: ViewAllTopdealtsComponent;
  let fixture: ComponentFixture<ViewAllTopdealtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllTopdealtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllTopdealtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
