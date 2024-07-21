import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedingConfigurationComponent } from './feeding-configuration.component';

describe('FeedingConfigurationComponent', () => {
  let component: FeedingConfigurationComponent;
  let fixture: ComponentFixture<FeedingConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedingConfigurationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedingConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
