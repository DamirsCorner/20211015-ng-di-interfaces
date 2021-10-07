import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Issue } from './api.model';
import { ApiService } from './api.service';

@Injectable()
export class MockApiService implements ApiService {
  constructor() {}

  public getIssues(owner: string, repo: string): Observable<Issue[]> {
    return of([{ number: 1, title: 'Fake issue' }]);
  }
}
