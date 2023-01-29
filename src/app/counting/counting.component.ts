import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {

   count:any;

  constructor() { }

  ngOnInit(): void {
    this.count=[
      {section:"Work complete",valuse:"450", icon: 'ion-checkmark-round'},
      {section:"Year of experience",valuse:"15",icon: "ion-ios-calendar-outline"},
      {section:"Total clints",valuse:"550",icon: "ion-ios-people"},
      {section:"Award win",valuse:"36", icon: "ion-ribbon-a"}
    ];


}
}
