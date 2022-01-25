import { TweetModel } from './../tweet-model';
import { Component, OnInit } from '@angular/core';
import { TweetServiceService } from '../Services/tweet-service.service';

@Component({
  selector: 'app-my-tweeting',
  templateUrl: './my-tweeting.component.html',
  styleUrls: ['./my-tweeting.component.css'],
})
export class MyTweetingComponent implements OnInit {
  datacollection: TweetModel[] = [];
  tagword: string = '';
  constructor(private tweetService: TweetServiceService) {}

  ngOnInit(): void {
    this.tweetService.GetTweets().subscribe((data: TweetModel[]) => {
      next: this.datacollection = data;
    });
  }

  checkWord(): boolean {
    console.log('i do something');
    return true;
  }
}
