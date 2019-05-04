import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GithubRequestService } from './github-http/github-request.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GithubRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
