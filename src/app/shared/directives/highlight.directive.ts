import { HostBinding, HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.background-color')
  backgroundColor: string;

  previousColor: string;

  @HostListener('mouseenter')
  newColor(): void {
    console.log('ss');
    this.previousColor = this.backgroundColor;
    this.backgroundColor = '#3366CC';
  }

  @HostListener('mouseleave')
  oldColor(): void {
    console.log('leave');
    this.backgroundColor = this.previousColor;
  }

  constructor() { }
}
