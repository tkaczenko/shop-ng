import { HostBinding, HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  previousColor: string;

  @HostListener('mouseenter')
  newColor(): void {
    this.previousColor = this.backgroundColor;
    this.backgroundColor = '#3366CC';
  }

  @HostListener('mouseleave')
  oldColor(): void {
    this.backgroundColor = this.previousColor;
  }

  constructor() { }
}
