import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteSpecialiteDialogDashComponent } from 'app/manage-specialite/delete-specialite-dialog-dash/delete-specialite-dialog-dash.component';
import { Specialite } from 'app/manage-specialite/models/specialite';
import { SpecialiteService } from 'app/manage-specialite/service/specialite.service';
import { Matiere } from '../models/matiere';
import { MatiereService } from '../services/matiere.service';

@Component({
  selector: 'app-delete-matiere-dialog-dash',
  templateUrl: './delete-matiere-dialog-dash.component.html',
  styleUrls: ['./delete-matiere-dialog-dash.component.scss'],
})
export class DeleteMatiereDialogDashComponent {
  constructor(
    public deleteDialogRef: MatDialogRef<DeleteMatiereDialogDashComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Matiere,
    private matiereService: MatiereService
  ) {}
  uploadUrl = 'http://localhost:8082/upload-directory/';

  deleteSpecialite(): void {
    this.matiereService.deleteById(this.data.id).subscribe({
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
