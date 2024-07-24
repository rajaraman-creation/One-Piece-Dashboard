import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCalendarComponent } from './staff-calendar.component';

describe('StaffCalendarComponent', () => {
  let component: StaffCalendarComponent;
  let fixture: ComponentFixture<StaffCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
