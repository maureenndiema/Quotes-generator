import { Directive, ElementRef} from '@angular/core';
import { HostListener } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private backgroundDeco(action:string){
    
  }

  constructor(private elem:ElementRef) {
    elem.nativeElement.style.backgroundColor='rgb(173, 148, 225)';
  }
  
}
