import { TestBed, inject } from '@angular/core/testing';

import { MyRolService } from './my-rol-service.service';

describe('MyRolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyRolService]
    });
  });

  it('should ...', inject([MyRolService], (service: MyRolService) => {
    expect(service).toBeTruthy();
  }));
});
