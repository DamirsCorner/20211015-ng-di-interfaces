import { Observable } from 'rxjs';
import { Issue } from './api.model';

export abstract class ApiService {
  public abstract getIssues(owner: string, repo: string): Observable<Issue[]>;
}
