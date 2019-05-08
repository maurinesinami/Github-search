import { Component, OnInit } from '@angular/core';
import { GithubRequestService} from '../github-http/github-request.service'
@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css'],
  providers:[GithubRequestService]
})
export class MyInfoComponent implements OnInit {
  myInfo:any
  constructor(public http:GithubRequestService) { }

  ngOnInit() {
    this.http.myUserInfo()
    this.myInfo = this.http.user
  }

}
