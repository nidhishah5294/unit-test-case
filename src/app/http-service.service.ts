import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postModel } from './post-modal';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  BASE_URL = 'https://jsonplaceholder.typicode.com/'
  constructor(private httpClient: HttpClient) { }

  public getPostList() {
    return this.httpClient.get<postModel[]>(this.BASE_URL + 'posts');
  }

  public addPost(post: postModel) {
    const headers = new HttpHeaders();
    return this.httpClient.post(this.BASE_URL + 'posts', post, { headers });
  }
}
