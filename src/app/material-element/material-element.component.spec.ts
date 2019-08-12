import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialElementComponent } from './material-element.component';

describe('MaterialElementComponent', () => {
  let component: MaterialElementComponent;
  let fixture: ComponentFixture<MaterialElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
