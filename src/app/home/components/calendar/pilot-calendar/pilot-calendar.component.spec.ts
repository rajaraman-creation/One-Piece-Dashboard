import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotCalendarComponent } from './pilot-calendar.component';

describe('PilotCalendarComponent', () => {
  let component: PilotCalendarComponent;
  let fixture: ComponentFixture<PilotCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilotCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PilotCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
