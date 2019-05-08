import { Component, OnInit } from '@angular/core';
import { GithubRequestService } from '../github-http/github-request.service';


@Component({
  selector: 'app-other-users',
  templateUrl: './other-users.component.html',
  styleUrls: ['./other-users.component.css'],
  providers: [GithubRequestService]
})
export class OtherUsersComponent implements OnInit {
  usernameInput:string
  otherUserInfo: any
  constructor(public htt:GithubRequestService) { }
  getUserInfo(){
    this.htt.apiRequest(this.usernameInput)
    this.otherUserInfo = this.htt.user
  }

  ngOnInit() {

  }

}
