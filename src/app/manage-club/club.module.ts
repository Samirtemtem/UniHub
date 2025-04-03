import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { ClubRoutingModule } from './club-routing.module';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ClubListDashComponent } from './club-list-dash/club-list-dash.component';
import { DeleteClubComponent } from './delete-club/delete-club.component';
import { AddClubDialogDashComponent } from './add-club-dialog-dash/add-club-dialog-dash.component';
import { UpdateClubDialogDashComponent } from './update-club-dialog-dash/update-club-dialog-dash.component';
import { ErrorFormHandlerComponent } from './error-form-handler/error-form-handler.component';
import { ClubDetailDashComponent } from './club-detail-dash/club-detail-dash.component';
import { AddEventDialogDashComponent } from './manage-events/add-event-dialog-dash/add-event-dialog-dash.component';
import { UpdateEventDialogDashComponent } from './manage-events/update-event-dialog-dash/update-event-dialog-dash.component';
import { ShowDescriptionDialogComponent } from './manage-events/show-description-dialog/show-description-dialog.component';
import { ShowDescriptionDialogDirective } from './manage-events/directives/show-description-dialog.directive';
import { EventListFrontComponent } from './manage-events/event-list-front/event-list-front.component';
import { ClubListFrontComponent } from './club-list-front/club-list-front.component';
import { ClubDetailFrontComponent } from './club-detail-front/club-detail-front.component';

@NgModule({
  declarations: [
    EventDetailsComponent,
    ClubListDashComponent,
    DeleteClubComponent,
    AddClubDialogDashComponent,
    UpdateClubDialogDashComponent,
    ErrorFormHandlerComponent,
    ClubDetailDashComponent,
    AddEventDialogDashComponent,
    UpdateEventDialogDashComponent,
    ShowDescriptionDialogComponent,
    ShowDescriptionDialogDirective,
    EventListFrontComponent,
    ClubListFrontComponent,
    ClubDetailFrontComponent,
  ],
  imports: [
    CommonModule,
    ClubRoutingModule,
    MaterialModule,
    FormsModule,
    TablerIconsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [TablerIconsModule, ErrorFormHandlerComponent],
  providers: [
    DatePipe,
    // ...
  ],
})
export class ClubModule {}
