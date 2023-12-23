import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutsModule } from '../layouts/layouts.module';
import { SharedModule } from '../shared/shared.module';

import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './home-page/contact-us/contact-us.component';
import { TerritorialIntegrationComponent } from './home-page/territorial-integration/territorial-integration.component';
import { FeaturesComponent } from './home-page/features/features.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { HeroComponent } from './home-page/hero/hero.component';
import { LayoutsComponent } from './home-page/layouts/layouts.component';
import { ServicesComponent } from './home-page/services/services.component';
import { PagesModule } from '../pages/pages.module';
import { ClientsComponent } from './home-page/clients/clients.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LandingPageComponent,
    HomePageComponent,
    ContactUsComponent,
    TerritorialIntegrationComponent,
    HomePageComponent,
    HeroComponent,
    ServicesComponent,
    LayoutsComponent,
    FeaturesComponent,
    FooterComponent,
    ClientsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    LandingPageRoutingModule,
    LayoutsModule,
    SharedModule,
    PagesModule,
    NgbCarouselModule,
  ],
})
export class LandingPageModule { }
