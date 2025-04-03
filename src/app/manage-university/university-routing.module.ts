import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityListDashComponent } from './university-list-dash/university-list-dash.component';
import { UniversityDetailDashComponent } from './university-detail-dash/university-detail-dash.component';
import { UniversityListComponent } from './university-list/university-list.component';
import { UniversityDetailComponent } from './university-detail/university-detail.component';
import {UniversityUpdateComponent} from "./university-update/university-update.component";

import {ResolverUnivService} from "./resolver-univ.service";
import {FoyerListDashComponent} from "../manage-foyer/foyer-list-dash/foyer-list-dash.component";
import {FoyerListResolverService} from "../manage-foyer/service/foyer-list-resolver.service";

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: UniversityListDashComponent,
        resolve: {
          universitere: ResolverUnivService
        }
      },
      {
        path: '',
        component: UniversityListDashComponent,
      },
      {
        path: ':id',
        component: UniversityDetailDashComponent,
      },
      {
        path: 'update/:id',
        component: UniversityUpdateComponent,
      },

      {
        path: 'news/update/:id',
        component: UniversityUpdateComponent,
      },

    ],

  },
  {
    path: '',
    component: UniversityListComponent,
  },
  {
    path: ':id',
    component: UniversityDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageUniversityRoutingModule {}
