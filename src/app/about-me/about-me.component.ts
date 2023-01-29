import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {


   skills:any;

  constructor() { }

  ngOnInit(): void {
    this.skills=[
      {skill:"html",value:'85%' },
      {skill:"css3",value:'65%'},
      {skill:"javascript",value:'55%'},
      {skill:"java",value:'50%'}


    ];

  }

}
