import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RestoListDashComponent} from "./resto-list-dash/resto-list-dash.component";
import {RestaurantDetailDashComponent} from "./restaurant-detail-dash/restaurant-detail-dash.component";
import {RestaurantListComponent} from "./restaurant-list/restaurant-list.component";

const routes: Routes = [

  {
    path: 'admin',
    children: [
      {
        path: '',
        component: RestoListDashComponent,
      },
      {
        path: ':id',
        component: RestaurantDetailDashComponent,
      },
    ],

  } ,
  {
    path: '',
    component: RestaurantListComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestoRoutingModule { }
