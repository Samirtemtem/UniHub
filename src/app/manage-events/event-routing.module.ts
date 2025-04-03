import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowEventComponent } from './show-event/show-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import {AddEventComponent} from "./add-event/add-event.component";
import {ListEventDashComponent} from "./list-event-dash/list-event-dash.component";
import {ShowEventFrontComponent} from "./show-event-front/show-event-front.component";
import {ListEventComponent} from "./list-event/list-event.component";

const routes: Routes = [
  {
    path: 'admin',
    children: [


      {
        path: '',
        component: ListEventDashComponent,
      },
      {
        path: ':id',
        component: ShowEventComponent,
      },
      {
        path: 'update/:id',
        component: UpdateEventComponent,
      },



    ],

  },
  {
    path: '',
    component: ListEventComponent,
  },
  {
    path: ':id',
    component: ShowEventFrontComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageEventsRoutingModule {}
