import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageHubComponent } from './message-hub.component';

describe('MessageHubComponent', () => {
  let component: MessageHubComponent;
  let fixture: ComponentFixture<MessageHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageHubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
