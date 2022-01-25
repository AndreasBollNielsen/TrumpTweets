import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-piping',
  templateUrl: './my-piping.component.html',
  styleUrls: ['./my-piping.component.css']
})
export class MyPipingComponent implements OnInit {

  myvalue: string;
  constructor() {
    this.myvalue = "";
   }

  ngOnInit(): void {
  }

}
