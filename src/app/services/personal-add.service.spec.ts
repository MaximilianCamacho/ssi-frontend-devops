import { TestBed, inject } from '@angular/core/testing';

import { PersonalAddService } from './personal-add.service';

describe('PersonalAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalAddService]
    });
  });

  it('should be created', inject([PersonalAddService], (service: PersonalAddService) => {
    expect(service).toBeTruthy();
  }));
});
