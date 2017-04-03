import { TestBed, inject } from '@angular/core/testing';

import { MyLocatieService } from './my-locatie-service.service';

describe('MyLocatieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyLocatieService]
    });
  });

  it('should ...', inject([MyLocatieService], (service: MyLocatieService) => {
    expect(service).toBeTruthy();
  }));
});
