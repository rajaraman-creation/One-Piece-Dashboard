import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMeterComponent } from './dashboard-meter.component';

describe('DashboardMeterComponent', () => {
  let component: DashboardMeterComponent;
  let fixture: ComponentFixture<DashboardMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMeterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
