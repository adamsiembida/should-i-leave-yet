import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.css']
})
export class TimeEntryComponent implements OnInit {

  public minutesMask = {
    mask: [/[0-5]/, /[0-9]/],
    guide: false
  };

  public hoursMask = {
    mask: [/[0-9]/, /[0-9]/],
    guide: false
  };

  public minutes = '30';
  public hours = '0';

  constructor() { }

  ngOnInit() {
  }

}
