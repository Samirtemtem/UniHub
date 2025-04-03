import { Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoomHover]'
})
export class ZoomHoverDirective {
  @Output() mouseZoom = new EventEmitter<boolean>();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.zoom(1.1);
    this.mouseZoom.emit(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.zoom(1);
    this.mouseZoom.emit(false);
  }

  private zoom(scale: number) {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${scale})`);

  }
}
