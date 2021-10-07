import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from './api.model';
import { ApiService } from './api.service';

@Injectable()
export class RemoteApiService implements ApiService {
  constructor(private httpClient: HttpClient) {}

  public getIssues(owner: string, repo: string): Observable<Issue[]> {
    return this.httpClient.get<Issue[]>(
      `https://api.github.com/repos/${owner}/${repo}/issues`
    );
  }
}
