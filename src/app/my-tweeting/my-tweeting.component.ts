import { TweetModel } from './../tweet-model';
import { Component, OnInit } from '@angular/core';
import { TweetServiceService } from '../Services/tweet-service.service';

@Component({
  selector: 'app-my-tweeting',
  templateUrl: './my-tweeting.component.html',
  styleUrls: ['./my-tweeting.component.css']
})
export class MyTweetingComponent implements OnInit {

  datacollection: TweetModel[] = [];
  constructor(private tweetService: TweetServiceService) { }

  ngOnInit(): void {

    this.tweetService.GetTweets().subscribe((data: TweetModel[] )=> {next: this.datacollection = data});
  }

}
