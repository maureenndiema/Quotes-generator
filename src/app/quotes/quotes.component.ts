import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  public quotes: Quote[] =[
    new Quote (1, 'First Quote', 1, 0, "description"),
    new Quote (2, 'Second Quote', 0, 0, "description"),
    new Quote (3, 'Third Quote', 0, 0,"description"),
    new Quote (4, 'Fourth Quote', 0, 0,"description"),
    new Quote (5, 'Fifth Quote', 0, 0, "description"),

  ]
  arr: number[] = this.quotes.map(quote=>quote.upvotes)
  highest = Math.max (...this.arr)

  toggleDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
