import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { SpecialiteRoutingModule } from './specialite-routing.module';
import { SpecialityDetailsComponent } from './speciality-details/speciality-details.component';
import { SpecialiteListDashComponent } from './specialite-list-dash/specialite-list-dash.component';
import { AddSpecialiteDialogDashComponent } from './add-specialite-dialog-dash/add-specialite-dialog-dash.component';
import { SpecialiteDetailDashComponent } from './specialite-detail-dash/specialite-detail-dash.component';
import { DeleteSpecialiteDialogDashComponent } from './delete-specialite-dialog-dash/delete-specialite-dialog-dash.component';
import { UpdateSpecialiteDialogDashComponent } from './update-specialite-dialog-dash/update-specialite-dialog-dash.component';
import { ErrorFormHandlerComponent } from './error-form-handler/error-form-handler.component';
import { ShowDescriptionDialogDirective } from './manage-matiere/directives/show-description-dialog.directive';
import { ShowDescriptionDialogComponent } from './manage-matiere/show-description-dialog/show-description-dialog.component';
import { AddMatiereDialogDashComponent } from './manage-matiere/add-matiere-dialog-dash/add-matiere-dialog-dash.component';
import { DeleteMatiereDialogDashComponent } from './manage-matiere/delete-matiere-dialog-dash/delete-matiere-dialog-dash.component';
import { UpdateMatiereDialogComponent } from './manage-matiere/update-matiere-dialog/update-matiere-dialog.component';
import { SpecialiteListFrontComponent } from './specialite-list-front/specialite-list-front.component';
import { SpecialiteDetailFrontComponent } from './specialite-detail-front/specialite-detail-front.component';
import { MatiereDetailFrontComponent } from './manage-matiere/matiere-detail-front/matiere-detail-front.component';
import { SpecialiteCardFrontComponent } from './specialite-card-front/specialite-card-front.component';
import { PdfViewerDialogDirective } from './directives/pdf-viewer-dialog.directive';
import { PdfViewerDialogComponent } from './pdf-viewer-dialog/pdf-viewer-dialog.component';
import { DeleteSpecialiteDialog2DashComponent } from './delete-specialite-dialog2-dash/delete-specialite-dialog2-dash.component';

@NgModule({
  declarations: [
    SpecialiteListFrontComponent,
    SpecialityDetailsComponent,
    SpecialiteListDashComponent,
    AddSpecialiteDialogDashComponent,
    SpecialiteDetailDashComponent,
    DeleteSpecialiteDialogDashComponent,
    UpdateSpecialiteDialogDashComponent,
    ErrorFormHandlerComponent,
    ShowDescriptionDialogDirective,
    ShowDescriptionDialogComponent,
    AddMatiereDialogDashComponent,
    DeleteMatiereDialogDashComponent,
    UpdateMatiereDialogComponent,
    SpecialiteListFrontComponent,
    SpecialiteDetailFrontComponent,
    MatiereDetailFrontComponent,
    SpecialiteCardFrontComponent,
    PdfViewerDialogDirective,
    PdfViewerDialogComponent,
    DeleteSpecialiteDialog2DashComponent,
  ],
  imports: [
    CommonModule,
    SpecialiteRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [TablerIconsModule],
})
export class SpecialiteModule {}
