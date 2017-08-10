import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaskedInputDirective } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { TimeEntryComponent } from './time-entry/time-entry.component';
import { BingMapComponent } from './bing-map/bing-map.component';
import { ResetTimerComponent } from './reset-timer/reset-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    MaskedInputDirective,
    TimeEntryComponent,
    BingMapComponent,
    ResetTimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
