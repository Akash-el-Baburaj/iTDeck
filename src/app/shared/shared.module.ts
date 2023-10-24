import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { WorldMapComponent } from './vectormap/world-map/world-map.component';
import { VectormapComponent } from './vectormap/vectormap.component';
import { PricingCardComponent } from './pricing-card/pricing-card.component';
import { FaqComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    PricingCardComponent,
    WorldMapComponent,
    VectormapComponent,
    FaqComponent,
    BlogComponent,
  ],
  imports: [
    CommonModule,
    NgbTooltip,
    ReactiveFormsModule,
    NgbCollapseModule,
  ], 
  exports: [
    BlogComponent,
    PricingCardComponent,
    WorldMapComponent,
    VectormapComponent,
    FaqComponent,
    NgbTooltip,
    ReactiveFormsModule,
    NgbCollapseModule,
  ]
})
export class SharedModule { }
