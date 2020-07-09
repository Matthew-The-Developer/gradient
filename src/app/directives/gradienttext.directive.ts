import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';
import { Gradient } from '../models/gradient.model';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[gradienttext]'
})
export class GradienttextDirective implements OnChanges {
  @Input('gradienttext') gradient: Gradient;

  constructor(private el: ElementRef, private render: Renderer2) { }

  ngOnChanges() {
    this.setBackground(`linear-gradient(${this.getGradient()})`);
  }

  getGradient() {
    return `${this.gradient.rotation}deg, ${this.gradient.colors.join()}`;
  }

  setBackground(bg) {
    this.el.nativeElement.style.background = bg;
    this.render.setStyle(this.el.nativeElement, '-webkit-background-clip', 'text');
    this.render.setStyle(this.el.nativeElement, '-webkit-text-fill-color', 'transparent');
  }
}
