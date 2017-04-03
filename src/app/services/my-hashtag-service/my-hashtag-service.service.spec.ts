import { TestBed, inject } from '@angular/core/testing';

import { MyHashtagService } from './my-hashtag-service.service';

describe('MyHashtagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyHashtagService]
    });
  });

  it('should ...', inject([MyHashtagService], (service: MyHashtagService) => {
    expect(service).toBeTruthy();
  }));
});
