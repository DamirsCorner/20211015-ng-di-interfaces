import { Observable } from 'rxjs';
import { Issue } from './api.model';

export interface ApiService {
  getIssues(owner: string, repo: string): Observable<Issue[]>;
}
