import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RemoteApiService } from './remote-api.service';

describe('RemoteApiService', () => {
  let service: RemoteApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(RemoteApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
