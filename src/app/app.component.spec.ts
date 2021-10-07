import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { RemoteApiService } from './remote-api.service';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: ApiService, useClass: RemoteApiService }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should get different instances for ApiService and RemoteApiService', () => {
    const apiService = TestBed.inject(ApiService);
    const remoteApiService = TestBed.inject(RemoteApiService);

    expect(remoteApiService).not.toBe(apiService);
  });
});
