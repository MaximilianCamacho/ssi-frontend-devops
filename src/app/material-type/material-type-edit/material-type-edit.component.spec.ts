import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTypeEditComponent } from './material-type-edit.component';

describe('MaterialTypeEditComponent', () => {
  let component: MaterialTypeEditComponent;
  let fixture: ComponentFixture<MaterialTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
