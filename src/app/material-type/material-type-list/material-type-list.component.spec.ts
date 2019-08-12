import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTypeListComponent } from './material-type-list.component';

describe('MaterialTypeListComponent', () => {
  let component: MaterialTypeListComponent;
  let fixture: ComponentFixture<MaterialTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
