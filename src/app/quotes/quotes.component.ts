import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {

  public quotes: Quote[] =[
    new Quote (1, 'Do you,the world will adjust',' By: Sophie Lu' ,0, 0, "description", "submitted_by:",new Date(2022, 4, 10)),
    new Quote (2, 'Learning to say No once in a while is an underrated life hack', 'By; Maureen',0, 0, "description" ,"submitted_by:", new Date(2022, 4, 10)),
    new Quote (3, 'The sun will rise again','By; Chelagat', 0, 0,"description" , "submitted_by:", new Date(2022, 4, 10)),
    new Quote (4, 'I am deliberate and afraid of nothing',
    'By;Audre Lorde', 0, 0,"description" ,"submitted_by:", new Date(2022, 4, 10)),
    new Quote (5, 'Be true to yourself','By; Ondego', 0, 0, "description" ,"submitted_by:", new Date(2022, 4, 10)),

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

  quoteDelete(isDelete: any, index: any) {
    if (isDelete) {
      let toDelete = confirm(`Confirm you want to delete  ${this.quotes[index].quote} ?`)

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  // highlightHighest() {
  //   /* function for getting quote with highest vote*/
  //   let quotesUpvote = []
  //   let highestUpVote: number
  //   for (let j = 0; j < this.quotes.length; j++) {
  //     quotesUpvote.push(this.quotes[j].upvotes)
  //   }

  //   quotesUpvote.sort(function (a, b) {
  //     return b - a
  //   })
  //   highestUpVote = quotesUpvote[0]
  //   return highestUpVote;
  // }

  preNum!:number
  lastNum!:number
  counter!:number

  
   
  arry: number[] = this.quotes.map(function(quote){
    return quote.upvotes
  });

  
  highestv (){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }

  
  


  constructor() { }

  ngOnInit(): void {
  }

}

