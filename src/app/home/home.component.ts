import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { Repository } from '../repo-class/repository';
import { GithubSearchService } from '../github-http/github-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
