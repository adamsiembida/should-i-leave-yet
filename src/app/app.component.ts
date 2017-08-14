import { Component, ViewChild } from '@angular/core';

import { BingMapComponent } from './bing-map/bing-map.component';
import { RefreshIndicatorComponent } from './refresh-indicator/refresh-indicator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(BingMapComponent)
  private map: BingMapComponent;

  @ViewChild(RefreshIndicatorComponent)
  private refreshIndicator: RefreshIndicatorComponent;

  refreshPeriodMs = 1000 * 60 * 5; // 5 minutes;

  private threshold: number;
  private travelTime: number;
  private timer;
  private directionsValid = false;

  // Threshold is always valid, this will only updated it when the user makes a change.
  onThresholdChanged(threshold: number) {
    this.threshold = threshold;
    if (this.directionsValid === true) {
      this.startAppCycle();
    }
  }

  // Travel time is not valid until this function is called at least once.
  onTravelTimeChanged(travelTime: number) {
    this.directionsValid = true;

    this.travelTime = travelTime;
    this.startAppCycle();
  }

  private startAppCycle() {
    clearTimeout(this.timer);
    if (this.travelTime <= this.threshold) {
      this.refreshIndicator.stop();
      this.notifyUserToLeave();

    } else {
      this.refreshIndicator.start();
      this.timer = setTimeout(() => this.onTimerExpired(), this.refreshPeriodMs);
    }
  }

  onTimerExpired() {
    this.map.requestTravelTimeUpdate();
  }

  notifyUserToLeave() {
    alert('Time to leave!');
  }
}
