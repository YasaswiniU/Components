import { Component, OnInit, ElementRef,Output, EventEmitter } from '@angular/core';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {
   }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
    
  }

  onCloseClick() {
    this.close.emit();
  }

}
