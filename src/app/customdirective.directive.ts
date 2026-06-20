import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]',
  standalone: true
})
export class CustomdirectiveDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.fontsize = "80px"
    el.nativeElement.style.color = "blue"
  }

}
