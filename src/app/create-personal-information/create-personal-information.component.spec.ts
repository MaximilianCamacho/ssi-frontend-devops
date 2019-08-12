import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonalInformationComponent } from './create-personal-information.component';

describe('CreatePersonalInformationComponent', () => {
  let component: CreatePersonalInformationComponent;
  let fixture: ComponentFixture<CreatePersonalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePersonalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
