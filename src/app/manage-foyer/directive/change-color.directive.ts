//import { Directive } from '@angular/core';
import { Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {


  @Output() colorChanged = new EventEmitter<string>();

  constructor(private el: ElementRef) { }
  @HostListener('click') onClick() {
    const newColor = this.getNextColor();
    this.el.nativeElement.style.color = newColor;
    this.colorChanged.emit(newColor);
  }

  private getNextColor(): string {
    this.currentColorIndex = (this.currentColorIndex + 1) % this.allowedColors.length;
    return this.allowedColors[this.currentColorIndex];
  }

  private allowedColors: string[] = ['#eae6ed', '#f5ebda', '#FFFFFF'];
  private currentColorIndex = 0;

}