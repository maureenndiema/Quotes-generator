import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Quote } from 'src/app/quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() isVoted = new EventEmitter<boolean>();

  quoteUpVote(quoteUpVote:boolean){
    this.isVoted.emit(quoteUpVote);
  }

  quoteDownVote(quoteDownVote:boolean){
    this.isVoted.emit(quoteDownVote);
  }


 
  constructor() { }

  ngOnInit(): void {
  }

}


