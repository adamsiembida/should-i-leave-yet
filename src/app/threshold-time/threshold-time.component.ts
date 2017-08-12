import { Component } from '@angular/core';
import { MainLoopService } from '../main-loop.service';

@Component({
  selector: 'app-threshold-time',
  templateUrl: './threshold-time.component.html',
  styleUrls: ['./threshold-time.component.css']
})
export class ThresholdTimeComponent {

  // Default to 30 minutes.
  public minutesText = '30';
  public hoursText = '0';
  public timeInMinutes: number;

  // Only allow 0 to 59 for minutes field.
  public minutesMask = {
    mask: [/[0-5]/, /[0-9]/],
    guide: false
  };

  // Only allow 0 to 99 for hours field.
  public hoursMask = {
    mask: [/[0-9]/, /[0-9]/],
    guide: false
  };

  constructor(public mainLoopService: MainLoopService) {
    this.onTimeChanged();
  }

  // Read the text from the fields and convert to a number of minutes.
  onTimeChanged(): void {
    this.timeInMinutes = Number(this.minutesText) + 60 * Number(this.hoursText);
    this.mainLoopService.onThresholdUpdate(this.timeInMinutes);
  }
}
