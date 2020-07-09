import { Directive, Input, ElementRef, OnChanges, Renderer2 } from '@angular/core';
import { Gradient } from '../models/gradient.model';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[gradient]'
})
export class GradientDirective implements OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('gradient') gradient: Gradient;

  constructor(private el: ElementRef, private render: Renderer2) { }

  ngOnChanges() {
    this.setBackground(`linear-gradient(${this.getGradient()})`);
  }

  getGradient() {
    return `${this.gradient.rotation}deg, ${this.gradient.colors.join()}`;
  }

  setBackground(bg) {
    this.el.nativeElement.style.background = bg;
  }
}
