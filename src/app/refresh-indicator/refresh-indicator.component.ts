import { Component, OnInit } from '@angular/core';
import { MainLoopService } from '../main-loop.service';

@Component({
  selector: 'app-refresh-indicator',
  templateUrl: './refresh-indicator.component.html',
  styleUrls: ['./refresh-indicator.component.css']
})
export class RefreshIndicatorComponent implements OnInit {

  public progressPercentage: string;
  public progressAnimationDuration: string;

  private timer;
  private tickTime = 1000; // Tick time in ms.
  private reloadValue = 15;
  private currentValue = 0;

  private timerExpiredCallback: () => void;

  constructor(public mainLoopService: MainLoopService) {
    this.setProgress(0);
    this.progressAnimationDuration = 'width ' + Number(this.tickTime) + 'ms linear';
  }

  ngOnInit() {
    this.mainLoopService.setTimerComponent(this);
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
    this.timerExpiredCallback();
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

  setTimerExpiredCallback(f: () => void) {
    this.timerExpiredCallback = f;
  }
}
