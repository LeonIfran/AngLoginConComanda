import { TestBed } from '@angular/core/testing';

import { LogearService } from './logear.service';

describe('LogearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogearService = TestBed.get(LogearService);
    expect(service).toBeTruthy();
  });
});
