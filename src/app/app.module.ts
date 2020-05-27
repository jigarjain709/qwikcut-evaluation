import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { VplayerComponent } from './vplayer/vplayer.component';
import { VideoService } from './video.service';


@NgModule({
  declarations: [
    AppComponent,
    VplayerComponent
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    MatToolbarModule,
    MatMenuModule

  ],
  providers: [ VideoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
