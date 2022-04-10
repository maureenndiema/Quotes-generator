import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {

  numberOfupvotes: number = 0;
  likes() {
    this.numberOfupvotes++;
  }
numberOfdownvotes: number = 0;
  dislikes() {
    this.numberOfdownvotes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
