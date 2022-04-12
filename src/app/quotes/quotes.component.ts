import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {

  public quotes: Quote[] =[
    new Quote (1, 'Do you,the world will adjust.',' By: Sophie Lu' ,0, 0, "description", "submitted_by:",new Date(2022, 3, 10)),
    new Quote (2, 'Learning to say No once in a while is an underrated life hack.', 'By; Maureen',0, 0, "description" ,"submitted_by:", new Date(2022, 3, 10)),
    new Quote (3, 'The sun will rise again.','By; Chelagat', 0, 0,"description" , "submitted_by:", new Date(2022, 3, 10)),
    new Quote (4, 'I am deliberate and afraid of nothing.',
    'By;Audre Lorde', 0, 0,"description" ,"submitted_by:", new Date(2022, 3, 10)),
    new Quote (5, 'Be true to yourself.','By; Ondego', 0, 0, "description" ,"submitted_by:", new Date(2022, 3, 10)),

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

  preNum!:number
  lastNum!:number
  counter!:number
 
  highestvote (){
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

