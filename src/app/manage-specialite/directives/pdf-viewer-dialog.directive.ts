import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PdfViewerDialogComponent } from '../pdf-viewer-dialog/pdf-viewer-dialog.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Directive({
  selector: '[appPdfViewerDialog]',
})
export class PdfViewerDialogDirective {
  @Input() pdfFile: string = '';
  pdfLink: SafeResourceUrl;
  constructor(
    private el: ElementRef,
    private dialog: MatDialog,
    private sanitizer: DomSanitizer
  ) {}

  @HostListener('click') onClick() {
    this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfFile);

    this.openDialog(this.pdfLink);
  }

  private openDialog(pdfFile: SafeResourceUrl): void {
    this.dialog.open(PdfViewerDialogComponent, {
      data: { pdfFile },
      width: '70%',
      height: '92%',
    });
  }
}
