import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDeleteComponent } from './material-delete.component';

describe('MaterialDeleteComponent', () => {
  let component: MaterialDeleteComponent;
  let fixture: ComponentFixture<MaterialDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
