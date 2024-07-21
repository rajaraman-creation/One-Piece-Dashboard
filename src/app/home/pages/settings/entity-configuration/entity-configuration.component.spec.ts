import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityConfigurationComponent } from './entity-configuration.component';

describe('EntityConfigurationComponent', () => {
  let component: EntityConfigurationComponent;
  let fixture: ComponentFixture<EntityConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityConfigurationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntityConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
