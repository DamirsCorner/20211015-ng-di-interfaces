import { Component } from '@angular/core';
import { Issue } from './api.model';
import { RemoteApiService } from './remote-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public issues: Issue[] = [];

  constructor(remoteApiService: RemoteApiService) {
    remoteApiService
      .getIssues('dotnet', 'runtime')
      .subscribe((issues) => (this.issues = issues));
  }
}
