import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { ThresholdTimeComponent } from './threshold-time/threshold-time.component';
import { BingMapComponent } from './bing-map/bing-map.component';
import { RefreshIndicatorComponent } from './refresh-indicator/refresh-indicator.component';
import { TitleComponent } from './title/title.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { GitHubIndicatorComponent } from './github-indicator/github-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    ThresholdTimeComponent,
    BingMapComponent,
    RefreshIndicatorComponent,
    TitleComponent,
    SubtitleComponent,
    GitHubIndicatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
