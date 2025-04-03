import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoyerRoutingModule } from './foyer-routing.module';
import { FoyerListDashComponent } from './foyer-list-dash/foyer-list-dash.component';
import { FoyerDetailDashComponent } from './foyer-detail-dash/foyer-detail-dash.component';
import { FoyerDetailComponent } from './foyer-detail/foyer-detail.component';

import { MaterialModule } from 'app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AddFoyerDialogDashComponent } from './add-foyer-dialog-dash/add-foyer-dialog-dash.component';
import {  UpdateFoyerDashComponent } from './update-foyer-dash/update-foyer.component';


import { ChangeColorDirective } from './directive/change-color.directive';
import { MatSortModule } from '@angular/material/sort';
import { FoyerListComponent } from './foyer-list/foyer-list.component';
import { ZoomDirective } from './directive/zoom.directive';
import { FoyerFilterPipe } from './pipe/foyer-filter.pipe';
import { AppErrorModule } from 'app/app-error.module';
import {MatSliderModule} from "@angular/material/slider";




@NgModule({
  declarations: [
    FoyerListDashComponent,
    FoyerListComponent,
    FoyerDetailDashComponent,
    FoyerDetailComponent,
    AddFoyerDialogDashComponent,
    UpdateFoyerDashComponent,
    ChangeColorDirective,
    ZoomDirective,
    FoyerFilterPipe,



  ],

  imports: [
    CommonModule,
    FoyerRoutingModule,
    MaterialModule,
    MatSliderModule,
    FormsModule,
    TablerIconsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppErrorModule,
    MatSortModule
  ]
})
export class FoyerModule { }
