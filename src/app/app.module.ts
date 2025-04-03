import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
import { UserModule } from './manage-user/user.module';
import { UniversityModule } from './manage-university/university.module';
import { SpecialiteModule } from './manage-specialite/specialite.module';
import { FoyerModule } from './manage-foyer/foyer.module';
import { ChambreModule } from './manage-chambre/chambre.module';
import { RestoModule } from './manage-resto/resto.module';
import { ClubModule } from './manage-club/club.module';
import { PreLoaderComponent } from './layouts/front/pre-loader/pre-loader.component';
import { BackToTopComponent } from './layouts/front/back-to-top/back-to-top.component';
import { NavbarComponent } from './layouts/front/navbar/navbar.component';
import { FooterComponent } from './layouts/front/footer/footer.component';
import { FrontComponent } from './layouts/front/front.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppErrorModule } from './app-error.module';
import { LoadingService } from './services/loading.service';
import { LoadingInterceptor } from './intercepter/loading.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { ManageEventsModule } from './manage-events/manage-events.module';
import { ManageActualiteModule } from './manage-actualite/manage-actualite.module';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
    PreLoaderComponent,
    BackToTopComponent,
    NavbarComponent,
    FooterComponent,
    FrontComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecaptchaModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    AppErrorModule,

    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    UserModule,
    UniversityModule,
    SpecialiteModule,
    FoyerModule,
    ChambreModule,
    RestoModule,
    ClubModule,
    ManageEventsModule,
    ManageActualiteModule,
  ],

  providers: [
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  exports: [TablerIconsModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
