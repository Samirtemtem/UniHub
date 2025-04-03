import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChambreListDashComponent} from "./chambre-list-dash/chambre-list-dash.component";
import {ChambreDetailDashComponent} from "./chambre-detail-dash/chambre-detail-dash.component";
import {ChambreListComponent} from "./chambre-list/chambre-list.component";
import {ShowOneComponent} from "./show-one/show-one.component";

const routes: Routes = [

  {
    path: 'admin',
    children: [
      {
        path: '',
        component: ChambreListDashComponent,
      },
      {
        path: ':id',
        component: ChambreDetailDashComponent,
      },
    ],

  } ,
  {
    path: '',
    component: ChambreListComponent,
  },
  // {
  //   path: 'reservations',
  //   component: ReservationListComponent,
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambreRoutingModule { }
