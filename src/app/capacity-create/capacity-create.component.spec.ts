import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityCreateComponent } from './capacity-create.component';

describe('CapacityCreateComponent', () => {
  let component: CapacityCreateComponent;
  let fixture: ComponentFixture<CapacityCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacityCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
