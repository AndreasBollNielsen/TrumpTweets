import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { TweetModel } from '../tweet-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TweetServiceService {

  constructor(private http:HttpClient) {}

  GetTweets(): Observable<TweetModel[]>
  {
    return this.http.get<TweetModel[]>('./assets/Data/trumpTweets.json');
  }
}
