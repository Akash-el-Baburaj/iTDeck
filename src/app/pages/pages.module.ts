import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { FaqComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    FaqComponent,
    BlogComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FaqComponent,
  ]
})
export class PagesModule { }
