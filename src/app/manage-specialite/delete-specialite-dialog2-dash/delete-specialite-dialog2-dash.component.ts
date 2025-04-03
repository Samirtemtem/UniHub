import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Specialite } from '../models/specialite';
import { SpecialiteService } from '../service/specialite.service';

@Component({
  selector: 'app-delete-specialite-dialog2-dash',
  templateUrl: './delete-specialite-dialog2-dash.component.html',
  styleUrls: ['./delete-specialite-dialog2-dash.component.scss'],
})
export class DeleteSpecialiteDialog2DashComponent {
  constructor(private specialiteService: SpecialiteService) {}
  @Input() deletedSpec: Specialite;
  @Output() onClose = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  deleteSpecialite(): void {
    this.specialiteService.deleteById(this.deletedSpec.id).subscribe({
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        let toParentData = [this.deletedSpec, { action: 'delete' }];
        this.onDelete.emit(toParentData);
        this.onClose.emit(false);
      },
    });
  }

  onCloseFn() {
    this.onClose.emit(false);
  }
}
