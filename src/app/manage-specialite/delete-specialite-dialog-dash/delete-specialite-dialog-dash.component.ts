import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Specialite } from '../models/specialite';
import { SpecialiteService } from '../service/specialite.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-specialite-dialog-dash',
  templateUrl: './delete-specialite-dialog-dash.component.html',
  styleUrls: ['./delete-specialite-dialog-dash.component.scss'],
})
export class DeleteSpecialiteDialogDashComponent {
  constructor(
    public deleteDialogRef: MatDialogRef<DeleteSpecialiteDialogDashComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Specialite,
    private specialiteService: SpecialiteService
  ) {}
  uploadUrl = 'http://localhost:8083/upload-directory/';

  deleteSpecialite(): void {
    this.specialiteService.deleteById(this.data.id).subscribe({
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        let toParentData = [this.data, { action: 'delete' }];
        this.deleteDialogRef.close(toParentData);
      },
    });
  }

  onNoClick(): void {
    this.deleteDialogRef.close();
  }
}
