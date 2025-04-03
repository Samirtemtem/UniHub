import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { FrontComponent } from './layouts/front/front.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { RoleListDashComponent } from './manage-user/role-list-dash/role-list-dash.component';
import { AuthentificationGuard } from '../app/pages/authentication/auth.guard';
import { roleGuard } from '../app/pages/authentication/role.guard';
import { AppSideRegisterComponent } from './pages/authentication/register/register.component';
import { AppSideLoginComponent } from './pages/authentication/login/login.component';
import { resolverResolver } from './resolver.resolver';

const routes: Routes = [
  {
    path: 'dashboard',
    component: FullComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'dashboard/home',
      //   pathMatch: 'full',
      // },
      {
        path: '',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      //manière asynchrone seulement lorsque la route /users est activée.(lazy loading)
      {
        path: 'users',
        loadChildren: () =>
          import('./manage-user/user.module').then((m) => m.UserModule),
      },

      //ajout user chaima
      {
        path: 'roles',
        component: RoleListDashComponent,
        resolve: {
          roles: resolverResolver,
        },
      },

      {
        path: 'universities',
        loadChildren: () =>
          import('./manage-university/university.module').then(
            (m) => m.UniversityModule
          ),
      },
      {
        path: 'evenement',
        loadChildren: () =>
          import('./manage-events/manage-events.module').then(
            (m) => m.ManageEventsModule
          ),
      },
      {
        path: 'restaurants',
        loadChildren: () =>
          import('./manage-resto/resto.module').then((m) => m.RestoModule),
      },
      {
        path: 'chambres',
        loadChildren: () =>
          import('./manage-chambre/chambre.module').then(
            (m) => m.ChambreModule
          ),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./manage-actualite/manage-actualite.module').then(
            (m) => m.ManageActualiteModule
          ),
      },

      //nabil_add
      {
        path: 'specialites',
        loadChildren: () =>
          import('./manage-specialite/specialite.module').then(
            (m) => m.SpecialiteModule
          ),
      },
      //nabil_add
      {
        path: 'clubs',
        loadChildren: () =>
          import('./manage-club/club.module').then((m) => m.ClubModule),
      },
    ],
    //canActivate: [AuthentificationGuard, roleGuard],
  },

  //front-----------------------
  {
    path: '',
    component: FrontComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: LandingpageComponent,
      },

      {
        path: 'universities',
        loadChildren: () =>
          import('./manage-university/university.module').then(
            (m) => m.UniversityModule
          ),
      },
      {
        path: 'evenement',
        loadChildren: () =>
          import('./manage-events/manage-events.module').then(
            (m) => m.ManageEventsModule
          ),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./manage-actualite/manage-actualite.module').then(
            (m) => m.ManageActualiteModule
          ),
      },
      {
        path: 'specialities',
        loadChildren: () =>
          import('./manage-specialite/specialite.module').then(
            (m) => m.SpecialiteModule
          ),
      },
      {
        path: 'restaurants',
        loadChildren: () =>
          import('./manage-resto/resto.module').then((m) => m.RestoModule),
      },

      //manière asynchrone seulement lorsque la route /'' est activée.(lazy loading)
      {
        path: '',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  {
    path: '**',
    component: FrontComponent,
    children: [
      {
        path: '',
        component: NotfoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
