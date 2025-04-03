import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialiteListDashComponent } from './specialite-list-dash/specialite-list-dash.component';
import { SpecialiteDetailDashComponent } from './specialite-detail-dash/specialite-detail-dash.component';
import { SpecialiteListFrontComponent } from './specialite-list-front/specialite-list-front.component';
import { SpecialiteDetailFrontComponent } from './specialite-detail-front/specialite-detail-front.component';
import { MatiereDetailFrontComponent } from './manage-matiere/matiere-detail-front/matiere-detail-front.component';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: SpecialiteListDashComponent,
      },
      {
        path: ':id',
        component: SpecialiteDetailDashComponent,
      },
    ],
  },

  {
    path: '',
    component: SpecialiteListFrontComponent,
  },
  {
    path: ':id',
    component: SpecialiteDetailFrontComponent,
  },
  {
    path: 'matiere/:id',
    component: MatiereDetailFrontComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialiteRoutingModule {}
