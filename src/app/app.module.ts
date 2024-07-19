import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MusicComponent } from './music/music.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import {YouTubePlayer, YouTubePlayerModule} from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MusicComponent,
    ContactComponent,
    NavComponent,
    FooterComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
