import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appReserveButton]'
})
export class ReserveButtonDirective {
  @Input('appReserveButton') dataIn: any;

  ngOnInit(): void {
    console.log("data in directive :", this.dataIn);
    if (this.dataIn.reservation != null) {
      this.red()
    }
  }

  red() {
    this.el.nativeElement.value = 'Chambre Reserve !! '
    this.el.nativeElement.style.backgroundColor = 'red';
    this.el.nativeElement.style.color = 'white';
    this.el.nativeElement.style.border = 'none';
    this.el.nativeElement.disabled = this.dataIn.reservation != null;

  }

  constructor(private el: ElementRef) {
  }

  @HostListener('click')
  onclick() {
    this.red();
  }
}
