import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTypeEditComponent } from './employee-type-edit.component';

describe('EmployeeTypeEditComponent', () => {
  let component: EmployeeTypeEditComponent;
  let fixture: ComponentFixture<EmployeeTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
