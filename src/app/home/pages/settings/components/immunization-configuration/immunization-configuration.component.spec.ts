import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunizationConfigurationComponent } from './immunization-configuration.component';

describe('ImmunizationConfigurationComponent', () => {
  let component: ImmunizationConfigurationComponent;
  let fixture: ComponentFixture<ImmunizationConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImmunizationConfigurationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImmunizationConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
