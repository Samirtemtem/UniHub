import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() university: any;
  isZoomed = false;

  onZoomChange(event: boolean) {
    this.isZoomed = event;
  }
}

