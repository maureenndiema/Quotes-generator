import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  public quotes: Quote[] =[
    new Quote (1, 'Do you the world will adjust', 1, 0, "description", New Date(2022, 8, 7)),
    new Quote (2, 'Learning to say No once in a while is an underrated life hack', 0, 0, "description" , New Date(2022, 8, 7)),
    new Quote (3, 'The sun will rise again', 0, 0,"description" , New Date(2022, 8, 7)),
    new Quote (4, 'The world owes you nothing', 0, 0,"description" , New Date(2022, 8, 7)),
    new Quote (5, 'Be tru to yourself', 0, 0, "description" , New Date(2022, 8, 7)),

  ]
  arr: number[] = this.quotes.map(quote=>quote.upvotes)
  highest = Math.max (...this.arr)

  toggleDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.postDate = new Date(quote.postDate)
    this.quotes.push(quote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
