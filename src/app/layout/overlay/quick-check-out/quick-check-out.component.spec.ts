import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCheckOutComponent } from './quick-check-out.component';

describe('QuickCheckOutComponent', () => {
  let component: QuickCheckOutComponent;
  let fixture: ComponentFixture<QuickCheckOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickCheckOutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuickCheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
