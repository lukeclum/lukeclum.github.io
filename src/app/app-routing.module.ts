import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }      from './pages/about/about.component';
import { HomeComponent }      from './pages/home/home.component';
import { ProjectDetailsComponent }  from './pages/project-details/project-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: ':id', component: ProjectDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
