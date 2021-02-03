import { ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {
  @Input()
  appClick: string;

  previousSize: string;
  clicked = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('click')
  onClick(): void {
    if (this.clicked) {
      this.renderer.setStyle(this.el.nativeElement, 'font-size', this.previousSize);
    } else {
      this.previousSize = this.el.nativeElement.style.fontSize;
      this.renderer.setStyle(this.el.nativeElement, 'font-size', this.appClick);
    }
    this.clicked = !this.clicked;
  }
}
