
import { Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.zoom(1.2); // You can adjust the zoom factor as needed
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.zoom(1.0); // Reset to normal size on mouse leave
  }

  private zoom(scale: number) {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${scale})`);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease-in-out');
  }
}
