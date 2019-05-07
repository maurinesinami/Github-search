import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GithubRequestService } from './github-http/github-request.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers : [GithubRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }