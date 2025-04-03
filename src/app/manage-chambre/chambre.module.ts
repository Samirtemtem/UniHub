import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChambreRoutingModule } from './chambre-routing.module';
import { ChambreListComponent } from './chambre-list/chambre-list.component';
import { ChambreListDashComponent } from './chambre-list-dash/chambre-list-dash.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {TablerIconsModule} from "angular-tabler-icons";
import { AddChambreDialogDashComponent } from './add-chambre-dialog-dash/add-chambre-dialog-dash.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { ChambreDetailDashComponent } from './chambre-detail-dash/chambre-detail-dash.component';
import { UpdateChambreDashComponent } from './update-chambre-dash/update-chambre-dash.component';
import { ShowOneComponent } from './show-one/show-one.component';

import { ReserveButtonDirective } from './show-one/reserve-button.directive';
import {QRCodeModule} from "angularx-qrcode";


import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ChambreListComponent,
    ChambreListDashComponent,
    AddChambreDialogDashComponent,
    ChambreDetailDashComponent,
    UpdateChambreDashComponent,

    ShowOneComponent,

    ReserveButtonDirective,

  ],
    imports: [
        CommonModule,
        ChambreRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatPaginatorModule,
        MatTableModule,
        TablerIconsModule,
        FormsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        QRCodeModule,
        MatSelectModule,

    ]
})
export class ChambreModule { }
