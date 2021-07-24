import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightLimitedProduct]'
})
export class HighlightLimitedProductDirective implements OnInit{
  @Input() isLimited!: boolean;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    if (this.isLimited) {    
      this.element.nativeElement.style.background = 'aquamarine';
    }
  }
}
