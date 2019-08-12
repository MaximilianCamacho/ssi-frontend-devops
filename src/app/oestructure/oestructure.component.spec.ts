import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OEstructureComponent } from './oestructure.component';

describe('OEstructureComponent', () => {
  let component: OEstructureComponent;
  let fixture: ComponentFixture<OEstructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OEstructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OEstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
