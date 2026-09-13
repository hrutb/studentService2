import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {

  constructor(private el:ElementRef) { }
  scrollToElement() :void{
           this.el.nativeElement.scrollIntoView({
                 behavior:'smooth',
                 block:'start'
           })
  }
}
