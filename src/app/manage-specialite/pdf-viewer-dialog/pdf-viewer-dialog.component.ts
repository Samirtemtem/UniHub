import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pdf-viewer-dialog',
  templateUrl: './pdf-viewer-dialog.component.html',
  styleUrls: ['./pdf-viewer-dialog.component.scss'],
})
export class PdfViewerDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  @ViewChild('iframe') iframe: any;
  dialogRef: MatDialogRef<PdfViewerDialogComponent>;

  ngAfterViewInit(): void {
    // Calculate dimensions and set iframe size
    const dialogHeight = this.dialogRef._containerInstance._config
      .height as unknown as number;

    if (this.iframe) {
      this.iframe.nativeElement.style.height = `${dialogHeight - 80}px`; // Adjust as needed
    }
  }
}
