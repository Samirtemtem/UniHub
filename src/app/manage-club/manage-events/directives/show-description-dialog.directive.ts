import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowDescriptionDialogComponent } from '../show-description-dialog/show-description-dialog.component';

@Directive({
  selector: '[appShowDescriptionDialog]',
})
export class ShowDescriptionDialogDirective {
  @Input('appShowDescriptionDialog') fullDescription: string;
  constructor(private el: ElementRef, private dialog: MatDialog) {}

  @HostListener('click') onClick() {
    this.openDialog(this.fullDescription);
  }

  private openDialog(description: string): void {
    this.dialog.open(ShowDescriptionDialogComponent, {
      data: { description },
      width: '500px',
    });
  }
}
