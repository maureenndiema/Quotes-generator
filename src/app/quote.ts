// import { identifierName } from "@angular/compiler";

export class Quote {
  showDescription: boolean;
    id:number;
    quote: string;
    upvotes: number;
    downvotes: number;
    description : string;

    constructor (id:number, quote: string, upvotes: number, downvotes: number, description:string){
    this.id = id;
    this.quote = quote;
    this.upvotes = upvotes;
    this.downvotes = downvotes;
    this.description = description;
    this.showDescription=false;
    
    // export class Quote {
    //     showDescription: boolean;
    //     constructor(public id: number,public name: string,public description: string){
    //       this.showDescription=false;
    //     }
    //   }
        
      }
}

