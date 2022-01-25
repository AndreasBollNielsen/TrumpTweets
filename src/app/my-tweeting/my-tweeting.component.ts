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
  toggelstyle:boolean = false;
  numLikes:number =0;
  constructor(private tweetService: TweetServiceService) {}

  ngOnInit(): void {
    this.tweetService.GetTweets().subscribe((data: TweetModel[]) => {
      next: this.datacollection = data;
    });
  }

toggleColor()
{
  this.toggelstyle = !this.toggelstyle;
}

  checkWord(index:number): boolean {
    if(this.tagword !="")
    {
      let msg = this.datacollection[index].text;
      return msg.includes(this.tagword);
    }


    return false;

  }
}
