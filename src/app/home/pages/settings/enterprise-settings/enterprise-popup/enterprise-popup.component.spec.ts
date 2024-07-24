import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterprisePopupComponent } from './enterprise-popup.component';

describe('EnterprisePopupComponent', () => {
  let component: EnterprisePopupComponent;
  let fixture: ComponentFixture<EnterprisePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterprisePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnterprisePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
