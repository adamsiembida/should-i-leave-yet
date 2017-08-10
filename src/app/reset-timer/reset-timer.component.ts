import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-timer',
  templateUrl: './reset-timer.component.html',
  styleUrls: ['./reset-timer.component.css']
})
export class ResetTimerComponent implements OnInit {

  public progressPercentage: string;
  public progressAnimationDuration: string;

  private timer;
  private tickTime = 1000; // Tick time in ms.
  private reloadValue = 30;
  private currentValue = 0;

  constructor() {
    this.setProgress(0);
    this.progressAnimationDuration = 'width ' + Number(this.tickTime) + 'ms linear';
  }

  ngOnInit() {
    this.restartTimer();
  }

  // Progress is set by the width css property as a percentage.
  setProgress(ratio: number): void {
    this.progressPercentage = (ratio * 100) + '%';
  }

  onTick(): void {
    if (this.currentValue > 0) {
      this.currentValue--;
    } else {
      this.pauseTimer();
      this.onTimerExpired();
    }

    this.setProgress(this.currentValue / this.reloadValue);
  }

  onTimerExpired(): void {
    // Fire an event or call something in the service.

    this.restartTimer();
  }

  pauseTimer(): void {
    clearInterval(this.timer);
  }

  resumeTimer(): void {
    this.timer = setInterval(this.onTick.bind(this), this.tickTime);
  }

  reloadTimer(): void {
    this.currentValue = this.reloadValue;
  }

  prepareTimer(): void {
    this.pauseTimer();
    this.reloadTimer();
  }

  restartTimer(): void {
    this.prepareTimer();
    this.resumeTimer();
  }
}
