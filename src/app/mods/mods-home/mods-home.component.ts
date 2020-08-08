import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss']
})
export class ModsHomeComponent implements OnInit {

  modalOpen=false;
  accordions = [
    {title: "Why is the sky blue ?",content: "The sky is blue because it is."},
    {title: "What does an orange taste like ?", content: "An range tastes like an orange"},
    {title: "What color is the cat ?", content:"The cat is orange color"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
   this.modalOpen = !this.modalOpen;
  }

}
