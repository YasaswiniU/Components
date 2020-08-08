import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit {

  statistics = [
    {value:22,label: "Faves"},
    {value:22301,label: "Views"},
    {value:54,label: "Members"},
    {value:22,label: "Faves"}
  ];

  itemList = [
    { image: '../../../assets/images/couch.jpeg', title: 'Couch', description: 'A couch' },
    { image: '../../../assets/images/dresser.jpeg', title: 'Dresser', description: 'A Dresser' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
