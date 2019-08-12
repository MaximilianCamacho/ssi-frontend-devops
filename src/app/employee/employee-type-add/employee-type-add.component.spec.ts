import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTypeAddComponent } from './employee-type-add.component';

describe('EmployeeTypeAddComponent', () => {
  let component: EmployeeTypeAddComponent;
  let fixture: ComponentFixture<EmployeeTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTypeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
