import { TestBed } from '@angular/core/testing';

import { NautilusGuard } from './nautilus.guard';

describe('NautilusGuard', () => {
  let guard: NautilusGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NautilusGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
