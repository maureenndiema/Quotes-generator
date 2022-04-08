import { identifierName } from "@angular/compiler";

export class Quote {
    id!:number;
    quote!: string;
    upvotes!: number;
    downvotes!: number;

    constructor (id:number, quote:string, upvotes:number, downvotes:number)
    this.id = id;
    this.quote = quote;
    this.upvotes = upvotes;
    this.downvotes = downvotes;
}
