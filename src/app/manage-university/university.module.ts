import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { ManageUniversityRoutingModule } from './university-routing.module';
import { UniversityListDashComponent } from './university-list-dash/university-list-dash.component';
import { AddUniversityDialogDashComponent } from './add-university-dialog-dash/add-university-dialog-dash.component';
import { UniversityDetailDashComponent } from './university-detail-dash/university-detail-dash.component';
import { UniversityListComponent } from './university-list/university-list.component';
import { UniversityDetailComponent } from './university-detail/university-detail.component';
import { UniversityUpdateComponent } from './university-update/university-update.component';
import { ErrorComponent } from './error/error.component';
import { CardComponent } from './card/card.component';
import {ZoomHoverDirective} from "./zoom-hover.directive";



@NgModule({
    declarations: [
        UniversityListDashComponent,
        AddUniversityDialogDashComponent,
        UniversityDetailDashComponent,
        UniversityListComponent,
        UniversityDetailComponent,
        UniversityUpdateComponent,
        ErrorComponent,
        CardComponent,
      ZoomHoverDirective,
    ],
    imports: [
        CommonModule,
        ManageUniversityRoutingModule,
        MaterialModule,
        FormsModule,
        TablerIconsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
    ],

    exports: [TablerIconsModule, ErrorComponent],
})
export class UniversityModule {}
