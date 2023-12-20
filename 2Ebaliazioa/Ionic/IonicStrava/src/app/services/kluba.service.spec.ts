import { TestBed } from '@angular/core/testing';

import { KlubaService } from './kluba.service';

describe('KlubaService', () => {
  let service: KlubaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KlubaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
