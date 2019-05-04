import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user';
import { Repository } from '../repo-class/repository';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  user : User;
  reponame : Repository;
  private username : string;
  private repositories : string;
  constructor(private http: HttpClient) {
    this.username = "maurinesinami";
    this.user = new User ("");
    this.reponame = new Repository("","","","","",[]);

   }
   apiRequest(){
    interface ApiResponse{
      login: string;
      public_repos: string;
      avatar_url : any;
      html_url: string;
      following : string;
      followers : string;

    }
    let promise = new Promise ((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl +  this.username) .toPromise().then(response=>{
        this.user.username = response.login
        this.reponame.reponame = response.public_repos
        this.reponame.avatar = response.avatar_url
        this.reponame.html_url = response.html_url
        this.reponame.followers = response.followers
        this.reponame.following = response.following


        resolve()

      },
       error =>{
        this.user.username = "No such Username"
        this.reponame.reponame = "No such Repository"
        this.reponame.avatar = "Can't load image"
        this.reponame.html_url = "404 page not found"
        this.reponame.followers = ""
        this.reponame.following = ""

        reject(error)
      }
      )
    })
    return promise
  }

}
   
