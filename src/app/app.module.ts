import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { ProjectListComponent } from './partials/project-list/project-list.component';

import { StoryformComponent } from './projects/storyform/storyform.component';
import { CsComponentsComponent } from './projects/cs-components/cs-components.component';
import { BrisketKitComponent } from './projects/brisket-kit/brisket-kit.component';
import { JoulePackagingComponent } from './projects/joule-packaging/joule-packaging.component';
import { JouleCookViewComponent } from './projects/joule-cook-view/joule-cook-view.component';
import { MsrComponent } from './projects/msr/msr.component';
import { StudioAppComponent } from './projects/studio-app/studio-app.component';
import { GiganticSquidComponent } from './projects/gigantic-squid/gigantic-squid.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProjectListComponent,

    StoryformComponent,
    CsComponentsComponent,
    BrisketKitComponent,
    JoulePackagingComponent,
    JouleCookViewComponent,
    MsrComponent,
    StudioAppComponent,
    GiganticSquidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
