import { TestBed } from '@angular/core/testing';

import { MyshopformService } from './myshopform';

describe('Myshopform', () => {
  let service: MyshopformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyshopformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
