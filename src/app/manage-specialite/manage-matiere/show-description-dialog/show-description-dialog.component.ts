import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-description-dialog',
  templateUrl: './show-description-dialog.component.html',
  styleUrls: ['./show-description-dialog.component.scss'],
})
export class ShowDescriptionDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
