import { Component } from '@angular/core';
import { Issue } from './api.model';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public issues: Issue[] = [];

  constructor(apiService: ApiService) {
    apiService
      .getIssues('dotnet', 'runtime')
      .subscribe((issues) => (this.issues = issues));
  }
}
