import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() accords=[];

  openedItemIndex = 0;

  onClick(index: number){
    if(index===this.openedItemIndex) {
      this.openedItemIndex = -1;
    }
    else{
    this.openedItemIndex = index;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
