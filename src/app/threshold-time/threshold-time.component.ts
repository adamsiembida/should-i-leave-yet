import { Component, EventEmitter, Output, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-threshold-time',
  templateUrl: './threshold-time.component.html',
  styleUrls: ['./threshold-time.component.css']
})
export class ThresholdTimeComponent implements AfterViewInit {

  @Output()
  onTimeChanged = new EventEmitter<number>();

  // Debounce timer. Prevents onTimeChanged from firing unless input hasn't changed for a certain period of time.
  // Without the timer, for example, the threshold time of 1 would be sent if someone was typing 15. This would cause
  // the alert that the travel time is less than the threshold to trip, since 1 will be less than any travel time. This
  // way, the user can type 15 before the travel time is compared against the threshold.
  debounceTimer;
  debounceTimeMs = 2000;

  // Default to 30 minutes.
  minutesText = '30';
  hoursText = '0';

  // Only allow 0 to 59 for minutes field.
  minutesMask = {
    mask: [/[0-5]/, /[0-9]/],
    guide: false
  };

  // Only allow 0 to 99 for hours field.
  hoursMask = {
    mask: [/[0-9]/, /[0-9]/],
    guide: false
  };

  constructor() {}

  ngAfterViewInit(): void {
    // Update the parent with the initial value. Wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error.
    setTimeout(() => this.onTimeChanged.emit(this.readTime()), 0);
  }

  onFieldChanged() {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(
      () => this.onTimeChanged.emit(this.readTime()),
      this.debounceTimeMs
    );
  }

  readTime(): number {
    return Number(this.minutesText) + 60 * Number(this.hoursText);
  }
}
