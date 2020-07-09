import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

export interface Gradient {
  rotation: number;
  colors: string[];
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[gradient]'
})
export class GradientDirective implements OnChanges {
  @Input() gradient: Gradient;

  constructor(private el: ElementRef) { }

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
