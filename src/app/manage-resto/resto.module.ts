import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestoRoutingModule } from './resto-routing.module';
import { RestoListDashComponent } from './resto-list-dash/resto-list-dash.component';
import { AddRestoDialogComponent } from './add-resto-dialog/add-resto-dialog.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {TablerIconsModule} from "angular-tabler-icons";
// import {ErrorModule} from "./app/error.module";
import {AppErrorModule} from "../app-error.module";
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import { UpdateRestoDashComponent } from './update-resto-dash/update-resto-dash.component';
import { RestaurantDetailDashComponent } from './restaurant-detail-dash/restaurant-detail-dash.component';
import { UpdateRestoDialogComponent } from './update-resto-dialog/update-resto-dialog.component';
import { ShowOneComponent } from './show-one/show-one.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { QrcodeDialogeComponent } from './qrcode-dialoge/qrcode-dialoge.component';


@NgModule({
  declarations: [
    RestoListDashComponent,
    AddRestoDialogComponent,
    UpdateRestoDashComponent,
    RestaurantDetailDashComponent,
    UpdateRestoDialogComponent,
    ShowOneComponent,
    RestaurantListComponent,
    QrcodeDialogeComponent
  ],
  imports: [
    CommonModule,
    RestoRoutingModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    TablerIconsModule,
    AppErrorModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule
  ]
})
export class RestoModule { }
