import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GithubRequestService } from './github-http/github-request.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { OtherUsersComponent } from './other-users/other-users.component';
import { OtherUsersRepoComponent } from './other-users-repo/other-users-repo.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { MyReposComponent } from './my-repos/my-repos.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtherUsersComponent,
    OtherUsersRepoComponent,
    MyInfoComponent,
    MyReposComponent,
    
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