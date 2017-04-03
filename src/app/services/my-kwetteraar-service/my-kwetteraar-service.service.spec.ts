import { TestBed, inject } from '@angular/core/testing';

import { MyKwetteraarService } from './my-kwetteraar-service.service';

describe('MyKwetteraarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyKwetteraarService]
    });
  });

  it('should ...', inject([MyKwetteraarService], (service: MyKwetteraarService) => {
    expect(service).toBeTruthy();
  }));
});
