import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualiteListDashComponent } from './actualite-list-dash/actualite-list-dash.component';
import { ActualiteListFrontComponent } from './actualite-list-front/actualite-list-front.component';
import { ActualiteDetailsComponent } from './actualite-details/actualite-details.component';

const routes: Routes = [
  {
    path: '',
    component: ActualiteListDashComponent,
  },
  {
    path: 'front',
    children: [
      {
        path: '',
        component: ActualiteListFrontComponent,
      },
      {
        path: 'detail/:id',
        component: ActualiteDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageActualiteRoutingModule {}
