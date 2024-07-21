import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationConfigurationComponent } from './medication-configuration.component';

describe('MedicationConfigurationComponent', () => {
  let component: MedicationConfigurationComponent;
  let fixture: ComponentFixture<MedicationConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicationConfigurationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicationConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
