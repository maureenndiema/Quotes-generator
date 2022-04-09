import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  public quotes: Quote[] =[
    new Quote (1, 'Do you,the world will adjust',' By: Sophie Lu' ,0, 0, "description", "submitted_by:",new Date(2022, 8, 7)),
    new Quote (2, 'Learning to say No once in a while is an underrated life hack', 'By;',0, 0, "description" ,"submitted_by:", new Date(2022, 8, 7)),
    new Quote (3, 'The sun will rise again','By;Chelagat', 0, 0,"description" , "submitted_by:", new Date(2022, 8, 7)),
    new Quote (4, 'I am deliberate and afraid of nothing',
    'By;Audre Lorde', 0, 0,"description" ,"submitted_by:", new Date(2022, 8, 7)),
    new Quote (5, 'Be true to yourself','By; Bobo', 0, 0, "description" ,"submitted_by:", new Date(2022, 8, 7)),

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

  deleteQuote(isUpVoted: any, index: any) {
    if (isUpVoted) {
      let toDelete = confirm(`Confirm you want to delete  ${this.quotes[index].quote} quote.`)

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

