import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { ProjectPartialComponent } from './partials/project-partial/project-partial.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProjectPartialComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
