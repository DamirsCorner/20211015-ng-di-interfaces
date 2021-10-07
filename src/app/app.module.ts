import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RemoteApiService } from './remote-api.service';
import { ApiService } from './api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [{ provide: ApiService, useExisting: RemoteApiService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
