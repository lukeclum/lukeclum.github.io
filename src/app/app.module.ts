import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { ProjectListComponent } from './partials/project-list/project-list.component';

import { StoryformComponent } from './projects/storyform/storyform.component';
import { JouleDesignSystemComponent } from './projects/joule-design-system/joule-design-system.component';
import { SelectedWorkComponent } from './projects/selected-work/selected-work.component';
import { JoulePackagingComponent } from './projects/joule-packaging/joule-packaging.component';
import { JouleCookViewComponent } from './projects/joule-cook-view/joule-cook-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProjectListComponent,

    StoryformComponent,
    JouleDesignSystemComponent,
    SelectedWorkComponent,
    JoulePackagingComponent,
    JouleCookViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
