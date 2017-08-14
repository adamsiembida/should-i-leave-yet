import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-refresh-indicator',
  templateUrl: './refresh-indicator.component.html',
  styleUrls: ['./refresh-indicator.component.css']
})
export class RefreshIndicatorComponent {

  public progress: string;
  public animation: string;

  @Input()
  refreshPeriodMs: number;
  resetDelayMs = 1000;

  constructor() {
    this.stop();
  }

  start() {
    this.stop();

    // Give time for the "stop" css to take effect before starting. Otherwise bar won't clear to zero.
    setTimeout(() => {
      this.enableAnimation();
      this.setProgressRatio(1);
    }, this.resetDelayMs);
  }

  stop() {
    // Set to zero.
    this.disableAnimation();
    this.setProgressRatio(0);
  }

  private setProgressRatio(newRatio: number) {
    this.progress = (newRatio * 100) + '%';
  }

  private enableAnimation() {
    this.animation = 'width ' + (this.refreshPeriodMs - this.resetDelayMs) + 'ms linear';
  }

  private disableAnimation() {
    this.animation = 'width ' + 0 + 's linear';
  }
}
