import { Component, Input } from '@angular/core';
import { Specialite } from '../models/specialite';

@Component({
  selector: 'app-specialite-card-front',
  templateUrl: './specialite-card-front.component.html',
  styleUrls: ['./specialite-card-front.component.scss'],
})
export class SpecialiteCardFrontComponent {
  @Input() specialite: Specialite;
  // @Input() currentCount: number[];
  @Input() i: number;

  uploadUrl = 'http://localhost:8083/upload-directory/';
}
