import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  { path: '',
    component: LandingPageComponent,
  children:[
    { path:'', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
    { path: 'faqs', component: FaqComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'about-us', component: AboutUsComponent},
    // { path:'', component: LandingPageComponent},

  ] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
