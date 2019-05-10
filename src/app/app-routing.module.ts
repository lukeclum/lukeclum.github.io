import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }      from './pages/about/about.component';
import { HomeComponent }      from './pages/home/home.component';

import { StoryformComponent } from './projects/storyform/storyform.component';
import { JouleDesignSystemComponent } from './projects/joule-design-system/joule-design-system.component';
import { SelectedWorkComponent } from './projects/selected-work/selected-work.component';
import { JoulePackagingComponent } from './projects/joule-packaging/joule-packaging.component';
import { JouleCookViewComponent } from './projects/joule-cook-view/joule-cook-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },

  { path: 'sous-vide-cook-view', component: JouleCookViewComponent, data: {animation: 'CookPage'} },
  { path: 'storyform', component: StoryformComponent },
  { path: 'joule-design-system', component: JouleDesignSystemComponent },
  { path: 'joule-packaging', component: JoulePackagingComponent },
  { path: 'selected-work', component: SelectedWorkComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
