import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = 'rgba(46,171,163,255)';
  }

}
