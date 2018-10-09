import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }      from './pages/about/about.component';
import { HomeComponent }      from './pages/home/home.component';

import { StoryformComponent } from './projects/storyform/storyform.component';
import { CsComponentsComponent } from './projects/cs-components/cs-components.component';
import { BrisketKitComponent } from './projects/brisket-kit/brisket-kit.component';
import { JoulePackagingComponent } from './projects/joule-packaging/joule-packaging.component';
import { JouleCookViewComponent } from './projects/joule-cook-view/joule-cook-view.component';
import { MsrComponent } from './projects/msr/msr.component';
import { StudioAppComponent } from './projects/studio-app/studio-app.component';
import { GiganticSquidComponent } from './projects/gigantic-squid/gigantic-squid.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'sous-vide-cook-view', component: JouleCookViewComponent },
  { path: 'storyform', component: StoryformComponent },
  { path: 'chefsteps-web-components', component: CsComponentsComponent },
  { path: 'joule-packaging', component: JoulePackagingComponent },
  { path: 'brisket-kit', component: BrisketKitComponent },
  { path: 'msr', component: MsrComponent },
  { path: 'gigantic-squid', component: GiganticSquidComponent },
  { path: 'studio-216', component: StudioAppComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
