import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  box:any;

  constructor() { }

  ngOnInit(): void {

    this.box=[
    {title: "Lorem impsum dolor",name:"web desgin", date:"18/sep/2018",},
    {title: "Loreda Cuno Nere",name:"web desgin", date:"18/sep/2018"},
    {title: "Mavrito Lana Dere",name:"web desgin", date:"18/sep/2018"},
    {title: "Bindo Laro Cado",name:"web desgin", date:"18/sep/2018"},
    {title: "Studio Lena Mado",name:"web desgin", date:"18/sep/2018"},
    {title: "Studio Big Bang",name:"web desgin", date:"18/sep/2018"}
    
    ];


  }

}
