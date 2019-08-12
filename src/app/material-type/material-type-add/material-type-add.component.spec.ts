import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTypeAddComponent } from './material-type-add.component';

describe('MaterialTypeAddComponent', () => {
  let component: MaterialTypeAddComponent;
  let fixture: ComponentFixture<MaterialTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialTypeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
