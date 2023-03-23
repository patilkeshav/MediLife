import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLabtestsComponent } from './book-labtests.component';

describe('BookLabtestsComponent', () => {
  let component: BookLabtestsComponent;
  let fixture: ComponentFixture<BookLabtestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookLabtestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookLabtestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
