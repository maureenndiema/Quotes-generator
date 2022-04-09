// import { identifierName } from "@angular/compiler";

export class Quote {
  showDescription: boolean;
    id:number;
    quote: string;
    author: string;
    upvotes: number;
    downvotes: number;
    description : string;
    submitted_by: string;
    postdate:Date;

    constructor (id:number, quote: string, author: string, upvotes: number, downvotes: number, description:string,submitted_by: string, postdate:Date){
    this.id = id;
    this.quote = quote;
    this.author = author
    this.upvotes = upvotes;
    this.downvotes = downvotes;
    this.description = description;
    this.submitted_by = submitted_by;
    this.postdate =postdate;
    this.showDescription=false;
    
    
    // export class Quote {
    //     showDescription: boolean;
    //     constructor(public id: number,public name: string,public description: string){
    //       this.showDescription=false;
    //     }
    //   }
        
      }
}

