import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ManageActualiteRoutingModule } from './manage-actualite-routing.module';
import { AddActualiteDialogDashComponent } from './add-actualite-dialog-dash/add-actualite-dialog-dash.component';
import { ActualiteDetailDashComponent } from './actualite-detail-dash/actualite-detail-dash.component';
import { ActualiteListDashComponent } from './actualite-list-dash/actualite-list-dash.component';
import { ErrorFormHandlerComponent } from './error-form-handler/error-form-handler.component';
import { ActualiteDetailsComponent } from './actualite-details/actualite-details.component';
import { ActualiteListFrontComponent } from './actualite-list-front/actualite-list-front.component';
import { MaterialModule } from 'app/material.module';
import { FormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateActualiteDialogDashComponent } from './update-actualite-dialog-dash/update-actualite-dialog-dash.component';

@NgModule({
  declarations: [
    AddActualiteDialogDashComponent,
    ActualiteDetailDashComponent,
    ActualiteListDashComponent,
    ErrorFormHandlerComponent,
    ActualiteDetailsComponent,
    ActualiteListFrontComponent,
    UpdateActualiteDialogDashComponent,
  ],
  imports: [
    CommonModule,
    ManageActualiteRoutingModule,
    MaterialModule,
    FormsModule,
    TablerIconsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [TablerIconsModule],
  providers: [
    DatePipe,
    // ...
  ],
})
export class ManageActualiteModule {}
