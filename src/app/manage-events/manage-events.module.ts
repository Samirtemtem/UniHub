import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { AddEventComponent } from './add-event/add-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { ShowEventComponent } from './show-event/show-event.component';
import { ListEventDashComponent } from './list-event-dash/list-event-dash.component';
import { ShowEventFrontComponent } from './show-event-front/show-event-front.component';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {TablerIconsModule} from "angular-tabler-icons";
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {ManageEventsRoutingModule} from "./event-routing.module";
import {ListEventComponent} from "./list-event/list-event.component";
import {ClubRoutingModule} from "../manage-club/club-routing.module";
import {MaterialModule} from "../material.module";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    AddEventComponent,
    UpdateEventComponent,
    ShowEventComponent,
    ListEventDashComponent,
    ListEventComponent,
    ShowEventFrontComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    ManageEventsRoutingModule,
    MaterialModule,
    MatIconModule,
    FormsModule,
    TablerIconsModule,
    MatNativeDateModule,
  ],
  exports: [TablerIconsModule],
  providers: [
    DatePipe,
    // ...
  ],
})
export class ManageEventsModule { }
